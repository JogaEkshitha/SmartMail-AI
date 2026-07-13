from .gemini_client import ask_gemini

VALID_PRIORITIES = [
    "High",
    "Medium",
    "Low",
]


def detect_priority_ai(subject, body):
    prompt = f"""
You are an intelligent email priority detector.

Your task is to determine the priority of an email.

Allowed priorities:

- High
- Medium
- Low

Rules:
- Respond with only one word.
- Do not explain.
- Do not use punctuation.
- Do not write complete sentences.

Examples:
Urgent meeting today -> High
Project review tomorrow -> Medium
Happy Birthday -> Low

Subject:
{subject}

Email:
{body}
"""

    result = ask_gemini(prompt)

    if result:
        result = result.strip()

        for priority in VALID_PRIORITIES:
            if priority.lower() == result.lower():
                return priority

    return "Medium"