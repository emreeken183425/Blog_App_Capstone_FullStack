

from django.urls import path,include
from .views import (
    CategoryViews,
    CommentView,
    LikeView,
    PostView,
    PostBlogView,
    PostBlogRUDView,
)

urlpatterns = [
    path("category/",CategoryViews.as_view()),
    path("comment/",CommentView.as_view()),
    path("like/",LikeView.as_view()),
    path("view/",PostView.as_view()),
    path("blogs/",PostBlogView.as_view()),
    path("blogs/<int:id>/",PostBlogRUDView.as_view()),
  
]
