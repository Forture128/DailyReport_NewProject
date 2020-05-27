# Serializers to convers model instances to JSON
# So that FE can work with the received data easily.

from rest_framework import serializers
from .models import Device

class DeviceSerializers(serializers.ModelSerializer):
    class Meta:
        model = Device
        fields = ('id', 'device_name', 'device_description', 'device_in_used')

