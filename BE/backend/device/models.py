from django.db import models

# Create your models here.

# add class device extend model


class Device(models.Model):
    device_name = models.CharField(max_length=120)
    device_description = models.TextField()
    device_in_used = models.BooleanField(default=True)

    def __str__(self):
        return self.device_name


class DeviceLocation(models.Model):
    """docstring for ClassName"""
    device_id = models.TextField(max_length=120)
    device_location_name = models.TextField(max_length=120)
    device_location = models.TextField(max_length=120)

    def __str__(self):
        return self.device_location_name


class Vehincle(models.Model):
    # Vehincle information
    vehincle_model = models.CharField(max_length=120)
    vehincle_type = models.CharField(max_length=120)
    vehincle_address = models.TextField(max_length=150)
    # Owner vehincle information
    owner_name = models.CharField(max_length=120)
    owner_phone = models.CharField(max_length=120)
    # License number of vehincle
    license_number = models.CharField(max_length=120)

    def __str__(self):
        return self.license_number


class Officer(models.Model):
    officer_id = models.CharField(max_length=120)
    officer_name = models.CharField(max_length=150)
    officer_location = models.CharField(max_length=150)
    status = models.BooleanField()

    def __str__(self):
        return self.officer_name


class EventIncident(models.Model):
    STATUS = (
        (1, 'unresolved'),
        (2, 'in progressing'),
        (3, 'resolved')
    )
    event_id = models.CharField(max_length=120)
    event_location = models.CharField(max_length=120)
    event_time = models.CharField(max_length=120)
    event_status = models.IntegerField(default=1, choices=STATUS)
    event_type = models.CharField(max_length=150)
    license_plate = models.TextField(max_length=120)

    def __str__(self):
        return self.event_id
