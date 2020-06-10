from rest_framework import viewsets  # New
from rest_framework import serializers

from ..models import Device


class DeviceSerializers(serializers.ModelSerializer):
    class Meta:
        model = Device
        fields = ('id', 'device_name', 'device_description', 'device_in_used')

# Create your views here.


class DeviceView(viewsets.ModelViewSet):
    serializer_class = DeviceSerializers
    queryset = Device.objects.all()
