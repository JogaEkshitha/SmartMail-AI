from django.urls import path
from .views import test_api, register
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("test/", test_api),
    path("register/", register),

    # JWT Login
    path("login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),

    # Refresh Token
    path("refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]