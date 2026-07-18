from .gemini_client import ask_gemini
import json
import re


def generate_ai_replies(subject, body, username):
    """
    Generate three AI-powered email replies:
    1. Professional
    2. Friendly
    3. Short
    """

    prompt = f"""
You are SmartMail AI, an intelligent email assistant.

Read the received email carefully and generate exactly THREE different email reply suggestions.

Original Email Subject:
{subject}

Original Email Body:
{body}

The person sending the reply is:
{username}

Generate the following reply styles:

1. Professional
- Formal and professional.
- Include a suitable greeting.
- Include a professional closing.
- Sign using "{username}".

2. Friendly
- Warm and conversational.
- Include a suitable greeting.
- Include a friendly closing.
- Sign using "{username}".

3. Short
- Maximum 2-3 sentences.
- Keep it polite and concise.
- Sign using "{username}" only if it feels natural.

IMPORTANT RULES:

- Return ONLY the email MESSAGE BODY.
- DO NOT include a subject line.
- DO NOT write "Subject:" anywhere.
- DO NOT start with "Re:".
- DO NOT invent any information.
- Reply only based on the received email.
- DO NOT use placeholders such as [My Name], [Your Name], [Company], or [Recipient].
- DO NOT mention that you are an AI.
- DO NOT use Markdown.
- DO NOT wrap the response inside ```json.
- Return ONLY valid JSON.
- Do NOT add any explanation before or after the JSON.

Return EXACTLY in this JSON format:

{{
    "professional": "...",
    "friendly": "...",
    "short": "..."
}}
"""

    response = ask_gemini(prompt)

    if not response:
        return None

    try:
        # Remove markdown if Gemini accidentally returns it
        response = re.sub(r"```json|```", "", response).strip()

        # Parse JSON
        result = json.loads(response)

        # Clean formatting
        for key in ["professional", "friendly", "short"]:
            if key in result:
                text = (
                    result[key]
                    .replace("\\n", "\n")
                    .strip()
                )

                # Extra safety: remove Subject if AI accidentally returns one
                text = re.sub(
                    r"^Subject\s*:.*\n*",
                    "",
                    text,
                    flags=re.IGNORECASE,
                ).strip()

                result[key] = text

        return result

    except json.JSONDecodeError as e:
        print("JSON Decode Error:", e)
        print("Gemini Response:", response)
        return None

    except Exception as e:
        print("Reply Parsing Error:", e)
        return None