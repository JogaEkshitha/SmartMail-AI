from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Email


class EmailSerializer(serializers.ModelSerializer):
    sender = serializers.ReadOnlyField(source="sender.username")

    recipient = serializers.CharField(write_only=True)

    class Meta:
        model = Email
        fields = [
            "id",
            "sender",
            "recipient",
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
        ]

    def create(self, validated_data):
        recipient_username = validated_data.pop("recipient")

        # Accept both:
        # rahul
        # rahul@smartmail.com
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
                    "recipient": "Recipient does not exist."
                }
            )

        email = Email.objects.create(
            sender=self.context["request"].user,
            recipient=recipient,
            **validated_data
        )

        return email