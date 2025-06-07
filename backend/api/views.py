from rest_framework import viewsets
from .models import Project, Experience
from .serializers import ProjectSerializer, ExperienceSerializer
from django.http import JsonResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
from portfolio_backend.settings import MONGO_DB

about_collection = MONGO_DB["about"]

@require_http_methods(["GET"])
def get_about(request):
    about_data = about_collection.find_one()
    if about_data:
        about_data["_id"] = str(about_data["_id"])
        return JsonResponse({"message":about_data})
    return JsonResponse({"error": "No About data found"}, status=404)

@csrf_exempt
@require_http_methods(["POST"])
def update_about(request):
    try:
        data = json.loads(request.body)
        required_fields = ["name", "title", "bio", "skills"]
        if not all(field in data for field in required_fields):
            return JsonResponse({"error": "Missing required fields"}, status=400)
        
        # Clear old content
        about_collection.delete_many({})
        result = about_collection.insert_one(data)
        return JsonResponse({"inserted_id": str(result.inserted_id)})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

def test_mongo(request):
    about_col = MONGO_DB['about']
    about_col.insert_one({"test": "Hello from Docker Mongo!"})
    data = about_col.find_one({"test": "Hello from Docker Mongo!"})
    data["_id"] = str(data["_id"])
    return JsonResponse({"mongo_data": data})

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer

class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer