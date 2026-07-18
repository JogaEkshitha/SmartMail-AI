from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from emails.models import Email
from emails.ai.dashboard_ai import generate_dashboard_insights

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def dashboard_stats(request):

    total_emails = Email.objects.filter(
        recipient=request.user
    ).count()

    priority_emails = Email.objects.filter(
        recipient=request.user,
        priority="High"
    ).count()

    spam_emails = Email.objects.filter(
        recipient=request.user,
        spam_score__gte=0.5
    ).count()

    summary_count = Email.objects.filter(
        recipient=request.user
    ).exclude(
        summary=""
    ).count()

    # Generate AI Assistant recommendations
    insights = generate_dashboard_insights(
        total_emails,
        priority_emails,
        spam_emails,
        summary_count,
    )

    recent_emails = Email.objects.filter(
        recipient=request.user
    ).order_by("-created_at")[:5]

    recent_data = []

    for email in recent_emails:
        recent_data.append({
            "id": email.id,
            "subject": email.subject,
            "sender": email.sender.username,
            "priority": email.priority,
            "created_at": email.created_at,
        })

    return Response({
        "totalEmails": total_emails,
        "priorityEmails": priority_emails,
        "spamEmails": spam_emails,
        "summaryCount": summary_count,
        "recentEmails": recent_data,
        "insights": insights,
    })