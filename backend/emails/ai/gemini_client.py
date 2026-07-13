import google.generativeai as genai
from django.conf import settings

# Configure Gemini
genai.configure(api_key=settings.GEMINI_API_KEY)

# Load Gemini model
model = genai.GenerativeModel("gemini-2.5-flash")


def ask_gemini(prompt):
    """
    Sends a prompt to Gemini and returns the response text.
    """

    try:
        response = model.generate_content(prompt)

        return response.text.strip()

    except Exception as e:
        print("Gemini Error:", e)
        return None