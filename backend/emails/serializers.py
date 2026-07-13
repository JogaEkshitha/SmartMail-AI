from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Email

from .ai.gemini_spam import detect_spam_ai
from .ai.gemini_priority import detect_priority_ai
from .ai.gemini_category import classify_category_ai
from .ai.gemini_summary import generate_ai_summary
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
        # AI Priority Detection
        # -------------------------
        priority = detect_priority_ai(
        validated_data.get("subject", ""),
        validated_data.get("body", "")
      )
         # -------------------------
         # AI Spam Detection
         # -------------------------

        spam_result = detect_spam_ai(
        validated_data.get("subject", ""),
        validated_data.get("body", "")
     )

        spam_score = spam_result["spam_score"]
        is_spam = spam_result["is_spam"]

        # -------------------------
        # AI Category Classification
        # -------------------------
        category = classify_category_ai(
        validated_data.get("subject", ""),
        validated_data.get("body", "")
   )

        # -------------------------
        # AI Summary
        # -------------------------
        summary = generate_ai_summary(
           validated_data.get("body", "")
   )

        email = Email.objects.create(
           sender=self.context["request"].user,
           recipient=recipient,
           priority=priority,
           category=category,
           spam_score=spam_score,
           is_spam=spam_result["is_spam"],
           summary=summary,
           **validated_data
        )

        return email