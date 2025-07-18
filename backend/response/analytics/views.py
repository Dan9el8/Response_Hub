# analytics/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import AccidentReport
from .serializers import AccidentReportSerializer
from .scraping import scrape_accident_data

class AccidentDataAPIView(APIView):
    def get(self, request):
        queryset = AccidentReport.objects.all()
        serializer = AccidentReportSerializer(queryset, many=True)
        return Response(serializer.data)

class ScrapeTriggerAPIView(APIView):
    def post(self, request):
        scrape_accident_data()
        return Response({"status": "Scraping started!"})
