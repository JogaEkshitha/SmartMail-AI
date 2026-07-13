from .gemini_client import ask_gemini


VALID_CATEGORIES = [
    "Work",
    "Finance",
    "Personal",
    "Promotion",
    "General",
]


def classify_category_ai(subject, body):
    prompt = f"""
You are an intelligent email classifier.

Your task is to classify the email into exactly ONE category.

Allowed categories:

- Work
- Finance
- Personal
- Promotion
- General

Rules:
- Respond with only one word.
- Do not explain.
- Do not use punctuation.
- Do not write complete sentences.

Subject:
{subject}

Email:
{body}
"""

    result = ask_gemini(prompt)

    if result:
        result = result.strip()

        for category in VALID_CATEGORIES:
            if category.lower() == result.lower():
                return category

    return "General"