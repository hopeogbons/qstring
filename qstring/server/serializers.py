from django.contrib.auth.models import User, Group
from qstring.server.models import Qstring, Submission
from django.contrib.auth import authenticate
from rest_framework import serializers, exceptions
import logging

log = logging.getLogger(__name__)


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        username = data.get("username", "")
        password = data.get("password", "")

        if username and password:
            user = authenticate(username=username, password=password)
            if user:
                if user.is_active:
                    data["user"] = user
                else:
                    msg = "User is deactivated"
                    raise exceptions.ValidationError(msg)
            else:
                msg = "Unable to login with given credentials"
                raise exceptions.ValidationError(msg)
        else:
            msg = "Must provide username and password"
            raise exceptions.ValidationError(msg)
        return data

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'groups')


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name')


class QstringSerializer(serializers.ModelSerializer):
    count_submissions = serializers.SerializerMethodField()

    def get_count_submissions(self, obj):
        return obj.submissions.count()

    class Meta:
        model = Qstring
        fields = ('id', 'title', 'desc', 'mappingset', 'revision', 'submission_url', 'count_submissions', 'is_active', 'date_created', 'date_updated', 'date_deleted')


class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = ('id', 'sender', 'qstring', 'payload', 'date_created', 'date_updated', 'date_deleted')
