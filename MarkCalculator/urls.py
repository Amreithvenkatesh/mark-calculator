from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from marksapi  import views

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^leaderboard/',views.Mrklist.as_view()),

]
