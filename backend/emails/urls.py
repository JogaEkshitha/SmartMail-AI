from django.urls import path
from .views import (
    send_email,
    inbox,
    sent_emails,
    ai_summary,
    priority_emails,
    spam_emails,
    categories,
    analytics,
    email_detail,
    ai_reply,
)

urlpatterns = [
    path("send/", send_email),
    path("inbox/", inbox),
    path("sent/", sent_emails),
    path("summary/", ai_summary),
    path("priority/", priority_emails),
    path("spam/", spam_emails),
    path("categories/", categories),
    path("analytics/", analytics),
    path("ai-reply/", ai_reply),
    path("<int:email_id>/", email_detail),
]