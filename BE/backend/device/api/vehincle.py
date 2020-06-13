from rest_framework import serializers, viewsets
from ..models import Vehincle as vehincle


class VehincleListSerializers(serializers.ModelSerializer):
    class Meta:
        model = vehincle
        fields = ('vehincle_type', 'license_number')


class VehincleListView(viewsets.ModelViewSet):
    serializer_class = VehincleListSerializers
    queryset = vehincle.objects.all()


class VehincleDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = vehincle
        fields = '__all__'


class VehincleDetailView(viewsets.ModelViewSet):
    serializer_class = VehincleDetailSerializer
    queryset = vehincle.objects.all()
