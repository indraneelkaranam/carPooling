from django.urls import path

from .views import BookingView
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('',BookingView,base_name='booking')
urlpatterns = router.urls