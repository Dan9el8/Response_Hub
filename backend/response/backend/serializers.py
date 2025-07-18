from .models import education
from rest_framework import serializers

class educationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = education
        fields = ['title', 'content', 'upload', 'category']