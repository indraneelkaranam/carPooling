from rest_framework.generics import ListAPIView

from rest_framework import viewsets

from home.models import Notification

from .serializers import NotificationSerializer


class NotificationView(viewsets.ModelViewSet):
    serializer_class = NotificationSerializer    
    queryset = Notification.objects.all()  