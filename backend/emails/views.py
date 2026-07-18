from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from collections import Counter
from django.db.models import Q
import re

from .serializers import EmailSerializer
from .models import Email
from notifications.utils import create_notification
from .ai.gemini_reply import generate_ai_replies

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def send_email(request):
    serializer = EmailSerializer(
        data=request.data,
        context={"request": request},
    )

    if serializer.is_valid():

        # Save email
        email = serializer.save()

 # -----------------------------
 # Sender Notification
 # -----------------------------
        create_notification(
            user=request.user,
            title="Email Sent",
            message=f'Your email "{email.subject}" was sent successfully.',
            notification_type="EMAIL_SENT",
        )

# -----------------------------
# Receiver Notification
# -----------------------------
        create_notification(
            user=email.recipient,
            title="New Email",
            message=f'You received an email from {request.user.username}.',
            notification_type="EMAIL_RECEIVED",
        )

# -----------------------------
# High Priority Notification
# -----------------------------
        if email.priority == "High":
            create_notification(
                user=email.recipient,
                title="High Priority Email",
                message=f'"{email.subject}" requires your attention.',
                notification_type="PRIORITY",
            )

        return Response(
            {
                "message": "Email sent successfully!"
            },
            status=status.HTTP_201_CREATED,
        )

    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST,
    )



# --------------------------
# Inbox API
# --------------------------

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def inbox(request):

    query = request.GET.get("search", "").strip()

    emails = Email.objects.filter(
        recipient=request.user
    )

    if query:
        emails = emails.filter(
            Q(subject__icontains=query) |
            Q(body__icontains=query) |
            Q(sender__username__icontains=query) |
            Q(category__icontains=query)
        )

    emails = emails.order_by("-created_at")

    serializer = EmailSerializer(
        emails,
        many=True
    )

    return Response(serializer.data)

# --------------------------
# Email Detail API
# --------------------------

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def email_detail(request, email_id):
    try:
        email = Email.objects.get(
            id=email_id,
            recipient=request.user
        )

        serializer = EmailSerializer(email)

        return Response(serializer.data)

    except Email.DoesNotExist:
        return Response(
            {"error": "Email not found."},
            status=status.HTTP_404_NOT_FOUND,
        )


# --------------------------
# Sent Mail API
# --------------------------

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def sent_emails(request):

    query = request.GET.get("search", "").strip()

    emails = Email.objects.filter(
        sender=request.user
    )

    if query:
        emails = emails.filter(
            Q(subject__icontains=query) |
            Q(body__icontains=query) |
            Q(recipient__username__icontains=query) |
            Q(category__icontains=query)
        )

    emails = emails.order_by("-created_at")

    serializer = EmailSerializer(
        emails,
        many=True
    )

    return Response(serializer.data)

# --------------------------
# AI Summary API
# --------------------------

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def ai_summary(request):

    emails = Email.objects.filter(
        recipient=request.user
    ).order_by("-created_at")

    summaries = []

    stop_words = {
        "the", "is", "are", "a", "an", "and", "to", "of",
        "for", "in", "on", "with", "this", "that", "it",
        "be", "as", "at", "by", "or", "from"
    }

    for email in emails:

        text = email.body

        sentences = re.split(r'(?<=[.!?])\s+', text)

        if len(sentences) <= 2:
            summary = text
        else:

            words = re.findall(r"\w+", text.lower())

            words = [
                word
                for word in words
                if word not in stop_words
            ]

            frequency = Counter(words)

            sentence_scores = {}

            for sentence in sentences:
                score = 0

                for word in re.findall(r"\w+", sentence.lower()):
                    score += frequency[word]

                sentence_scores[sentence] = score

            best = sorted(
                sentence_scores,
                key=sentence_scores.get,
                reverse=True
            )[:2]

            summary = " ".join(best)

        summaries.append({
            "id": email.id,
            "subject": email.subject,
            "sender": email.sender.username,
            "summary": summary,
            "created_at": email.created_at,
        })

    return Response(summaries)


# --------------------------
# Priority Emails API
# --------------------------

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def priority_emails(request):

    query = request.GET.get("search", "").strip()

    emails = Email.objects.filter(
        recipient=request.user,
        priority="High"
    )

    if query:
        emails = emails.filter(
            Q(subject__icontains=query) |
            Q(body__icontains=query) |
            Q(sender__username__icontains=query) |
            Q(category__icontains=query)
        )

    emails = emails.order_by("-created_at")

    serializer = EmailSerializer(
        emails,
        many=True
    )

    return Response(serializer.data)
    
 # --------------------------
 # Spam Emails API
 # --------------------------

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def spam_emails(request):

    query = request.GET.get("search", "").strip()

    emails = Email.objects.filter(
        recipient=request.user,
        is_spam=True
    )

    if query:
        emails = emails.filter(
            Q(subject__icontains=query) |
            Q(body__icontains=query) |
            Q(sender__username__icontains=query) |
            Q(category__icontains=query)
        )

    emails = emails.order_by("-created_at")

    serializer = EmailSerializer(
        emails,
        many=True
    )

    return Response(serializer.data)

 # --------------------------
 # Categories API
 # --------------------------

# --------------------------
# Categories API
# --------------------------

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def categories(request):

    query = request.GET.get("search", "").strip()

    emails = Email.objects.filter(
        recipient=request.user
    )

    if query:
        emails = emails.filter(
            Q(subject__icontains=query) |
            Q(body__icontains=query) |
            Q(sender__username__icontains=query) |
            Q(category__icontains=query)
        )

    emails = emails.order_by("-created_at")

    serializer = EmailSerializer(
        emails,
        many=True
    )

    return Response(serializer.data)

# --------------------------
# Analytics API
# --------------------------

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def analytics(request):

    emails = Email.objects.filter(recipient=request.user)

    total = emails.count()
    spam = emails.filter(is_spam=True).count()
    priority = emails.filter(priority="High").count()

    categories = {
        "Work": emails.filter(category="Work").count(),
        "Finance": emails.filter(category="Finance").count(),
        "Personal": emails.filter(category="Personal").count(),
        "Promotion": emails.filter(category="Promotion").count(),
        "General": emails.filter(category="General").count(),
    }

    return Response({
        "total_emails": total,
        "spam_emails": spam,
        "priority_emails": priority,
        "categories": categories,
    })
    
# --------------------------
# Smart AI Reply API
# --------------------------

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def ai_reply(request):
    try:
        subject = request.data.get("subject", "")
        body = request.data.get("body", "")

        print("========== AI REPLY ==========")
        print("Subject:", subject)
        print("Body:", body)
        print("Username:", request.user.username)

        if not body.strip():
            return Response(
                {"error": "Email body is required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        replies = generate_ai_replies(
            subject,
            body,
            request.user.username,
        )

        print("Gemini Result:", replies)

        if replies is None:
            return Response(
                {"error": "Gemini returned None"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )

        return Response(replies)

    except Exception as e:
        import traceback
        traceback.print_exc()

        return Response(
            {"error": str(e)},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )