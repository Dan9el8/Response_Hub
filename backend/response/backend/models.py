from django.db import models

# Create your models here.
class education(models.Model):
    CATEGORY = {
        "SF": "Safe_driving",
        "TF": "Traffic_rules",
        "VM": "Vehicle_Maintainance",
    }
    title = models.CharField(max_length=30, primary_key=True)
    content = models.TextField()
    upload = models.ImageField()
    category = models.CharField(max_length=25, choices=CATEGORY)
