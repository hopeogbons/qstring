"""qstring URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path, include
from django.conf.urls import url
from django.views.generic import TemplateView
from rest_framework import routers
from qstring.server.views import UserViewSet, GroupViewSet, LoginView, LogoutView

router = routers.SimpleRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    url(r'^api/v1/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/v1/auth/login', LoginView.as_view()),
    path('api/v1/auth/logout', LogoutView.as_view()),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
