from django.db import models

from custom_user.models import AbstractEmailUser


class User(AbstractEmailUser):
    name = models.CharField(max_length=255)

    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.name
