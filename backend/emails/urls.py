from django.urls import path
from .views import send_email, inbox, email_detail

urlpatterns = [
    path("send/", send_email),
    path("inbox/", inbox),
    path("<int:email_id>/", email_detail),
]