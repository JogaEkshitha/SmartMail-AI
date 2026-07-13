import re


# Spam keywords with weights
SPAM_KEYWORDS = {
    "lottery": 30,
    "winner": 25,
    "won": 20,
    "free": 15,
    "gift": 15,
    "offer": 10,
    "click here": 20,
    "claim": 20,
    "urgent": 10,
    "limited time": 15,
    "money": 15,
    "cash": 15,
    "prize": 25,
    "congratulations": 20,
    "bonus": 15,
    "earn": 10,
    "investment": 10,
    "bitcoin": 10,
    "crypto": 10,
    "discount": 10,
}


def detect_spam(subject, body):
    """
    Detect spam using weighted keyword scoring.
    Returns:
        is_spam (bool)
        spam_score (float)
        matched_keywords (list)
    """

    text = f"{subject} {body}".lower()

    score = 0
    matched = []

    for keyword, weight in SPAM_KEYWORDS.items():

        if re.search(rf"\b{re.escape(keyword)}\b", text):

            score += weight
            matched.append(keyword)

    # Maximum score capped at 100
    spam_score = min(score, 100)

    is_spam = spam_score >= 40

    return {
        "is_spam": is_spam,
        "spam_score": spam_score,
        "matched_keywords": matched,
    }