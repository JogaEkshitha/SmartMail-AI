from .gemini_client import ask_gemini


def test_connection():
    prompt = "Say only: Gemini connection successful."

    result = ask_gemini(prompt)

    print(result)