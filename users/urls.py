from django.urls import path
from .views import register_view, login_view, logout_view

urlpatterns = [
    path('sign-up/', register_view, name='register'),
    path('sign-in/', login_view, name='login'),
    path('log-out/', logout_view, name='logout'),
]
