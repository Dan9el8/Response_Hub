# analytics/models.py
from django.db import models

class AccidentReport(models.Model):
    road_name = models.CharField(max_length=255)
    vehicle_type = models.CharField(max_length=100)
    year = models.IntegerField()
    deaths = models.IntegerField()

    def __str__(self):
        return f"{self.road_name} - {self.vehicle_type} ({self.year})"
