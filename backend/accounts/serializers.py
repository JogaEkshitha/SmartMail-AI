from django.contrib.auth.models import User
from rest_framework import serializers


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    full_name = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            "full_name",
            "username",
            "email",
            "password",
        ]

    def create(self, validated_data):

        full_name = validated_data.pop("full_name")

        names = full_name.split(" ", 1)

        first_name = names[0]

        last_name = names[1] if len(names) > 1 else ""

        return User.objects.create_user(
            username=validated_data["username"],
            email=validated_data["email"],
            password=validated_data["password"],
            first_name=first_name,
            last_name=last_name,
        )