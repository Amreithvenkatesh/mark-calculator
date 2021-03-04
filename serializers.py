from rest_framework import serializers
from .models import Marklist

class MarklistSerializer(serializers.ModelSerializer):
    class Meta:
        model=Marklist
        fields='__all__'
