from django.urls import path
from .views import test_api, register

urlpatterns = [
    path("test/", test_api),
    path("register/", register),
]