from django.db import models
from django.contrib.auth.models import User


class Email(models.Model):

    PRIORITY_CHOICES = [
        ("High", "High"),
        ("Medium", "Medium"),
        ("Low", "Low"),
    ]

    CATEGORY_CHOICES = [
        ("General", "General"),
        ("Work", "Work"),
        ("Personal", "Personal"),
        ("Finance", "Finance"),
        ("Promotion", "Promotion"),
    ]

    sender = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="sent_emails"
    )

    recipient = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="received_emails"
    )

    subject = models.CharField(max_length=255)

    body = models.TextField()

    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES,
        default="General"
    )

    priority = models.CharField(
        max_length=10,
        choices=PRIORITY_CHOICES,
        default="Medium"
    )

    spam_score = models.FloatField(default=0.0)

    summary = models.TextField(blank=True)

    is_read = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.sender.username} → {self.recipient.username} | {self.subject}"