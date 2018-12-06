from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter
from qstring.server.views import LoginView, LogoutView, UserViewSet, GroupViewSet, QstringViewSet, SubmissionViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, base_name='user')
router.register(r'groups', GroupViewSet, base_name='group')
router.register(r'qstrings', QstringViewSet, base_name='qstring')
router.register(r'submissions', SubmissionViewSet, base_name='submission')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/auth/login/', LoginView.as_view()),
    path('api/v1/auth/logout/', LogoutView.as_view()),
    path('api/v1/auth/token/', obtain_auth_token, name='auth_token'),
    path('api/v1/', include(router.urls)),
    re_path('.*', TemplateView.as_view(template_name='index.html')),
]
