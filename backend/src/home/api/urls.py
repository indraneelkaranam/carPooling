from django.urls import path

from .views import infoListView,RegisterView
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register('',RegisterView,base_name='register')
urlpatterns = router.urls

# urlpatterns = [
#     path('',infoListView.as_view()),
# ]