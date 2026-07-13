def generate_summary(body):
    """
    Generate a simple summary.
    """

    if len(body) <= 120:
        return body

    return body[:120] + "..."