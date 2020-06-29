from django.urls import path

from .views import HistoryView
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('',HistoryView,base_name='history')
urlpatterns = router.urls