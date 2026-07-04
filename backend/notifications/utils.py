from .models import Notification


def create_notification(user, title, message, notification_type="SYSTEM"):
    """
    Create a notification for a user.
    """

    Notification.objects.create(
        user=user,
        title=title,
        message=message,
        notification_type=notification_type,
    )