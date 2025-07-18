# analytics/scraping.py
import requests
from bs4 import BeautifulSoup
from .models import AccidentReport

def scrape_accident_data():
    url = "https://www.ntsa.go.ke"  # example placeholder
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # Mockup scraping logic (replace with actual)
    # Assume this part gets the data
    data_rows = [
        {"road": "Mombasa Road", "vehicle": "Matatu", "year": 2023, "deaths": 42},
        {"road": "Thika Road", "vehicle": "Lorry", "year": 2022, "deaths": 30},
    ]

    for item in data_rows:
        AccidentReport.objects.update_or_create(
            road_name=item["road"],
            vehicle_type=item["vehicle"],
            year=item["year"],
            defaults={"deaths": item["deaths"]}
        )
