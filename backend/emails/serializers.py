from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Email


class EmailSerializer(serializers.ModelSerializer):
    sender = serializers.ReadOnlyField(source="sender.username")

    # Show recipient in GET responses
    recipient = serializers.ReadOnlyField(source="recipient.username")

    # Accept recipient while sending
    recipient_username = serializers.CharField(write_only=True)

    class Meta:
        model = Email
        fields = [
            "id",
            "sender",
            "recipient",
            "recipient_username",
            "subject",
            "body",
            "category",
            "priority",
            "spam_score",
            "summary",
            "is_read",
            "created_at",
        ]

        read_only_fields = [
            "category",
            "priority",
            "spam_score",
            "summary",
            "is_read",
            "created_at",
            "recipient",
        ]

    def create(self, validated_data):
        recipient_username = validated_data.pop("recipient_username")

        # Accept both:
        # ekshitha
        # ekshitha@smartmail.com
        if "@smartmail.com" in recipient_username:
            recipient_username = recipient_username.replace(
                "@smartmail.com",
                ""
            )

        try:
            recipient = User.objects.get(username=recipient_username)
        except User.DoesNotExist:
            raise serializers.ValidationError(
                {
                    "recipient_username": "Recipient does not exist."
                }
            )

        subject = validated_data.get("subject", "").lower()
        body = validated_data.get("body", "").lower()

        text = subject + " " + body

        # -------------------------
        # Priority Detection
        # -------------------------
        high_keywords = [
            "urgent",
            "asap",
            "important",
            "deadline",
            "meeting",
            "action required",
            "immediately",
            "critical",
            "review",
            "project",
        ]

        if any(keyword in text for keyword in high_keywords):
            priority = "High"
        else:
            priority = "Medium"

        # -------------------------
        # Spam Detection
        # -------------------------
        spam_keywords = [
            "winner",
            "free",
            "lottery",
            "claim",
            "offer",
            "click here",
            "prize",
            "congratulations",
            "money",
        ]

        spam_score = 0.0

        for keyword in spam_keywords:
            if keyword in text:
                spam_score += 0.2

        spam_score = min(spam_score, 1.0)

        # -------------------------
        # Category Detection
        # -------------------------
        if "meeting" in text or "project" in text:
            category = "Work"
        elif "invoice" in text or "payment" in text:
            category = "Finance"
        elif "family" in text or "friend" in text:
            category = "Personal"
        else:
            category = "General"

        # -------------------------
        # Simple Summary
        # -------------------------
        summary = validated_data.get("body", "")[:120]

        email = Email.objects.create(
            sender=self.context["request"].user,
            recipient=recipient,
            priority=priority,
            spam_score=spam_score,
            category=category,
            summary=summary,
            **validated_data
        )

        return email
    