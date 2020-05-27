from django.contrib import admin
from .models import Device

# Register your models here.
class DeviceAdmin(admin.ModelAdmin):
    list_display = ('device_name', 'device_description','device_in_used')

# Register model
admin.site.register(Device, DeviceAdmin)
