from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import (
    Category,
    Post,
    Comment,
    Like,
    PostView,
)
class CategorySerializers(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=[
            "id",
            "name"
        ]
