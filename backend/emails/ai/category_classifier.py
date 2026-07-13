CATEGORY_RULES = {
    "Work": [
        "meeting",
        "project",
        "client",
        "office",
        "deadline",
        "review",
    ],

    "Finance": [
        "invoice",
        "payment",
        "bank",
        "salary",
        "bill",
        "transaction",
    ],

    "Personal": [
        "family",
        "friend",
        "birthday",
        "home",
        "vacation",
    ],

    "Promotion": [
        "offer",
        "sale",
        "discount",
        "coupon",
        "deal",
    ],
}


def classify_category(subject, body):
    """
    Classify email into a category.
    """

    text = f"{subject} {body}".lower()

    for category, keywords in CATEGORY_RULES.items():

        for keyword in keywords:

            if keyword in text:
                return category

    return "General"