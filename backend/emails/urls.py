from django.urls import path
from .views import (
    send_email,
    inbox,
    sent_emails,
    ai_summary,
    priority_emails,
    email_detail,
)

urlpatterns = [
    path("send/", send_email),
    path("inbox/", inbox),
    path("sent/", sent_emails),
    path("summary/", ai_summary),
    path("priority/", priority_emails),
    path("<int:email_id>/", email_detail),
]