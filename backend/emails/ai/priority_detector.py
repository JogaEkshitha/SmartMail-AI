HIGH_PRIORITY_KEYWORDS = [
    "urgent",
    "asap",
    "important",
    "deadline",
    "meeting",
    "action required",
    "immediately",
    "critical",
    "review",
    "project",
]


def detect_priority(subject, body):
    """
    Detect email priority using keyword matching.
    """

    text = f"{subject} {body}".lower()

    for keyword in HIGH_PRIORITY_KEYWORDS:
        if keyword in text:
            return "High"

    return "Medium"