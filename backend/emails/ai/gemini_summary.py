from .gemini_client import ask_gemini


def generate_ai_summary(email_body):
    """
    Generate a short summary using Gemini AI.
    Falls back to the first 120 characters if Gemini fails.
    """

    prompt = f"""
You are an AI email assistant.

Summarize the following email in exactly 2 concise sentences.

Email:
{email_body}
"""

    result = ask_gemini(prompt)

    if result:
        return result

    # Fallback
    return email_body[:120]