import phonenumbers
import requests
from requests.auth import HTTPBasicAuth
from django.contrib.auth import login as django_login
from django.contrib.auth import logout as django_logout
from django.contrib.auth.models import Group, User
from django.db import transaction
from qstring.server.models import Qstring, Submission
from qstring.server.serializers import (GroupSerializer, LoginSerializer,
                                        QstringSerializer,
                                        SubmissionSerializer, UserSerializer)
from rest_framework import status, viewsets
from rest_framework.authentication import (SessionAuthentication,
                                           TokenAuthentication)
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

class LoginView(APIView):
    @staticmethod
    def post(request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        django_login(request, user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({"token": token.key}, status=status.HTTP_200_OK)


class LogoutView(APIView):
    authentication_classes = (TokenAuthentication, )

    @staticmethod
    def post(request):
        django_logout(request)
        return Response(status=204)


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    authentication_classes = (SessionAuthentication, TokenAuthentication, )
    permission_classes = (IsAdminUser, )
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    authentication_classes = (SessionAuthentication, TokenAuthentication, )
    permission_classes = (IsAdminUser, )
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class QstringViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows qstrings to be viewed or edited.
    """
    authentication_classes = (SessionAuthentication, TokenAuthentication, )
    permission_classes = (IsAuthenticated, )
    queryset = Qstring.objects.all().order_by('-date_created')
    serializer_class = QstringSerializer


class SubmissionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows submissions to be viewed or edited.
    """
    authentication_classes = (SessionAuthentication, TokenAuthentication, )
    permission_classes = (IsAuthenticated, )
    queryset = Submission.objects.all().order_by('-date_created')
    serializer_class = SubmissionSerializer

    def get_permissions(self):
        if self.action == 'create':
            return [AllowAny(), ]        
        return super(SubmissionViewSet, self).get_permissions()

    @staticmethod
    def standardize_phone_number(phone, country):
        return phonenumbers.format_number(phonenumbers.parse(phone, country), phonenumbers.PhoneNumberFormat.E164)

    @staticmethod
    def is_valid_sender(phone, country):
        return phonenumbers.is_valid_number(phonenumbers.parse(phone, country))

    @staticmethod
    def is_active_channel(qstring_id):
        status = False
        qstring_id = int(qstring_id)
        qstring_obj = Qstring.objects.filter(pk=qstring_id)
        if qstring_obj:
            status = qstring_obj[0].is_active
        return status
    
    def __post_to_aether(self, submission, payload):
        try:
            data = {
              'mappingset': submission.qstring.mappingset,
              'revision': submission.qstring.revision,
              'payload': payload
            }
            print('This is the data')
            print(data)
            request = requests.Session()
            request.auth = ('admin', 'adminadmin')
            aether = request.post(submission.qstring.submission_url, json=data)
            print('This is the aether')
            print(aether.json())

            if aether.ok:
                return True
            else:
                return False
        except Exception as e:
            print(e)
            return False
    
    def create(self, request):
        with transaction.atomic():
            sender = request.GET['sender']
            phone = self.standardize_phone_number(sender, 'NG')
            if self.is_valid_sender(phone, 'NG'):
                channel = request.GET['channel']
                if self.is_active_channel(channel):
                    query_string = dict(request.GET.lists())
                    payload = {}
                    for key in query_string:
                        payload[key] = query_string[key][0]
                    payload['sender'] = phone
                    data = { 'sender': phone, 'qstring': channel, 'payload': payload }
                    serializer = SubmissionSerializer(data=data)
                    if serializer.is_valid():
                        submission = serializer.save()
                        if self.__post_to_aether(submission, payload):
                            return Response(data, status=status.HTTP_200_OK)
                        return Response({'aether': 'failed to post to aether.'}, status=status.HTTP_400_BAD_REQUEST)
                    else:
                        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                else:
                    return Response({'channel': 'submission with this channnel number has been deactivated'}, status=status.HTTP_423_LOCKED)
            else:
                return Response({'sender': 'submission with this sender phone number is not well formed'}, status=status.HTTP_409_CONFLICT)
