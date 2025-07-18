# views.py
from rest_framework.viewsets import ModelViewSet
from .models import education
from .serializers import educationSerializer

class EducationViewSet(ModelViewSet):
    queryset = education.objects.all()
    serializer_class = educationSerializer
