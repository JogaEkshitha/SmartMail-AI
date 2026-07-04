from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),

    # Authentication
    path("api/accounts/", include("accounts.urls")),

    # Email APIs
    path("api/emails/", include("emails.urls")),

    # Dashboard API
    path("api/dashboard/", include("dashboard.urls")),
    
    # Notifications API
    path("api/notifications/", include("notifications.urls")),
]