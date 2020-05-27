from django.shortcuts import render
from rest_framework import viewsets # New
from .serializers import DeviceSerializers
from .models import Device


# Create your views here.
class DeviceView(viewsets.ModelViewSet):
    serializer_class = DeviceSerializers
    queryset = Device.objects.all()
