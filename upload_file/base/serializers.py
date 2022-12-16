from pyexpat import model
from rest_framework import serializers

from django.contrib.auth.models import User
from .models import Post


# class UserSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = User
#         fields = ['id', 'email', 'username']


class PostSerializer(serializers.ModelSerializer):

    # user =  UserSerializer(many=True)

    class Meta():
        model = Post
        # fields = ['id', 'file',  'remark', 'timestamp', 'user']
        fields = "__all__"




        