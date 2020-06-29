from rest_framework.generics import ListAPIView

from rest_framework import viewsets

from home.models import info,Register

from .serializers import infoSerializer,RegisterSerializer

class infoListView(ListAPIView):
    queryset = info.objects.all()
    serializer_class = infoSerializer

class RegisterView(viewsets.ModelViewSet):
    serializer_class = RegisterSerializer    
    queryset = Register.objects.all()
  