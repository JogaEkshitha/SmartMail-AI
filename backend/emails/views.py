from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .serializers import EmailSerializer
from .models import Email


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def send_email(request):
    serializer = EmailSerializer(
        data=request.data,
        context={"request": request},
    )

    if serializer.is_valid():
        serializer.save()

        return Response(
            {"message": "Email sent successfully!"},
            status=status.HTTP_201_CREATED,
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# --------------------------
# Inbox API
# --------------------------

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def inbox(request):

    emails = Email.objects.filter(
        recipient=request.user
    ).order_by("-created_at")

    serializer = EmailSerializer(
        emails,
        many=True
    )

    return Response(serializer.data)