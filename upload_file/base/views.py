from django.shortcuts import render
from rest_framework.decorators import api_view
# Create your views here.


from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

from base.models import Post

from .serializers import PostSerializer

class PostView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    api_view(['POST'])
    def post(self, request, *args, **kwargs):
        post_serializer = PostSerializer(data=request.data)

        if post_serializer.is_valid():
            post_serializer.save()
            return Response(post_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(post_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwags):
        post = Post.objects.all()
        post_serializer = PostSerializer(post, many=True)
        return Response(post_serializer.data)