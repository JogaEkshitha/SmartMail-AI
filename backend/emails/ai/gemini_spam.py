from .gemini_client import ask_gemini


def detect_spam_ai(subject, body):
    prompt = f"""
You are an AI spam detector.

Determine whether this email is spam.

Rules:
- Reply ONLY with:
Spam
Not Spam

Do not explain.
Do not use punctuation.

Subject:
{subject}

Email:
{body}
"""

    result = ask_gemini(prompt)

    if result:
        result = result.strip().lower()

        if result == "spam":
            return {
                "is_spam": True,
                "spam_score": 100,
            }

    return {
        "is_spam": False,
        "spam_score": 0,
    }