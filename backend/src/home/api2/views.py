from rest_framework.generics import ListAPIView

from rest_framework import viewsets

from home.models import History

from .serializers import HistorySerializer


class HistoryView(viewsets.ModelViewSet):
    serializer_class = HistorySerializer    
    queryset = History.objects.all()  