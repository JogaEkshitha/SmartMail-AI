from django.urls import path
from .views import test_api, register, profile
from .views import update_profile
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("test/", test_api),
    path("register/", register),
    path("profile/", profile),
    path("profile/update/", update_profile),

    # JWT Login
    path("login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),

    # Refresh Token
    path("refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]