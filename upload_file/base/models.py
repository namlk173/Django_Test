from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Post(models.Model):
    file = models.FileField(blank=False, null=False)
    remark = models.CharField(max_length=20)
    timestamp = models.DateTimeField(auto_now_add=True)
    # user = models.ManyToManyField(User, null=True, blank=True)