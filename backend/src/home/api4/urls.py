from django.urls import path

from .views import NotificationView
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('',NotificationView,base_name='notification')
urlpatterns = router.urls