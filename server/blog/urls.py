from django.contrib import admin
from django.urls import path
from .views import (
    CategoryViews
    )
urlpatterns = [
  path("/category",CategoryViews.as_view() )
]
