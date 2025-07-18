# analytics/urls.py
from django.urls import path
from .views import AccidentDataAPIView, ScrapeTriggerAPIView

urlpatterns = [
    #path('', AccidentDataAPIView.as_view(), name='accident'),
    path('data/', AccidentDataAPIView.as_view(), name='accident_data'),
    path('scrape/', ScrapeTriggerAPIView.as_view(), name='scrape_data'),
]
