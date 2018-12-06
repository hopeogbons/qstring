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
