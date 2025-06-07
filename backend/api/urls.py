from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, ExperienceViewSet
from django.urls import path
from .views import get_about, update_about, test_mongo

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'experiences', ExperienceViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path("about/", get_about),
    path("about/update/", update_about),
    path("test-mongo/", test_mongo),
]
