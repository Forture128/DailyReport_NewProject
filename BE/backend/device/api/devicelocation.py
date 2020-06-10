from ..models import DeviceLocation
from rest_framework import serializers, viewsets
from ..models import DeviceLocation as device_location


class DeviceLocationSerializers(serializers.ModelSerializer):
    class Meta:
        model = device_location
        fields = ('device_id', 'device_location_name', 'device_location')


class DeviceLocationView(viewsets.ModelViewSet):
    serializer_class = DeviceLocationSerializers
    queryset = DeviceLocation.objects.all()
