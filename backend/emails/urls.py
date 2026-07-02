from django.urls import path
from .views import send_email, inbox

urlpatterns = [
    path("send/", send_email),
    path("inbox/", inbox),
]