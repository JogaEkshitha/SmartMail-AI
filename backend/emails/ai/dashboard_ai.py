import json

from .gemini_client import ask_gemini

def generate_dashboard_insights(
    total_emails,
    priority_emails,
    spam_emails,
    summary_count,
):
    """
    Generates AI recommendations for Dashboard.
    Returns a list of 4 recommendations.
    """

    prompt = f"""
You are SmartMail AI.

You are an intelligent email assistant.

Based on the inbox statistics below,
generate EXACTLY 4 short recommendations.

Inbox Statistics:

Total Emails: {total_emails}
Priority Emails: {priority_emails}
Spam Emails: {spam_emails}
AI Summaries: {summary_count}

Rules:

1. Do NOT repeat the statistics.
2. Give recommendations only.
3. Maximum 12 words per recommendation.
4. Professional and helpful.
5. Return ONLY a JSON array.

Example:

[
"Review priority emails first.",
"Your inbox is well organized.",
"Spam remains under control.",
"AI summaries are saving time."
]
"""

def generate_dashboard_insights(
    total_emails,
    priority_emails,
    spam_emails,
    summary_count,
):
    prompt = f"""
You are SmartMail AI.

Based on the inbox statistics below,
generate EXACTLY 4 short recommendations.

Inbox Statistics:

Total Emails: {total_emails}
Priority Emails: {priority_emails}
Spam Emails: {spam_emails}
AI Summaries: {summary_count}

Rules:
1. Return ONLY a JSON array.
2. Do not include markdown.
3. Maximum 12 words per recommendation.
4. Give recommendations only.

Example:

[
  "Review priority emails first.",
  "Keep your inbox organized.",
  "Spam remains under control.",
  "AI summaries save reading time."
]
"""

    try:
        response = ask_gemini(prompt)

        print("\n========== GEMINI RESPONSE ==========")
        print(response)
        print("=====================================\n")

        if response:
            response = response.replace("```json", "")
            response = response.replace("```", "")
            response = response.strip()

            insights = json.loads(response)

            return insights

    except Exception as e:
        print("Dashboard AI Error:", e)

    return [
        "Review priority emails first.",
        "Keep your inbox organized daily.",
        "AI summaries can save reading time.",
        "Spam activity appears under control.",
    ]