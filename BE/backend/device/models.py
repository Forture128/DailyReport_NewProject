from django.db import models

# Create your models here.

# add class device extend model
class Device(models.Model):
    device_name = models.CharField(max_length=120)
    device_description = models.TextField()
    device_in_used = models.BooleanField(default=True)

    def __str__(self):
        return self.device_name
    