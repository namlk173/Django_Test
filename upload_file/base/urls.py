from django.urls import path 
from .views import PostView, GetView

urlpatterns = [
    path('upload/', PostView.as_view(), name='post-upload'),
    path('post/', GetView.as_view(), name='get-post')
]
