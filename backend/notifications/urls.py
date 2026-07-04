from django.urls import path

from .views import (
    notifications_list,
    mark_notification_read,
    mark_all_notifications_read,
)

urlpatterns = [

    path(
        "",
        notifications_list,
    ),

    path(
        "read/<int:pk>/",
        mark_notification_read,
    ),

    path(
        "read-all/",
        mark_all_notifications_read,
    ),

]