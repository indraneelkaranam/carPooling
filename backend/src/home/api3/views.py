from rest_framework.generics import ListAPIView

from rest_framework import viewsets

from home.models import Booking

from .serializers import BookingSerializer


class BookingView(viewsets.ModelViewSet):
    serializer_class = BookingSerializer    
    queryset = Booking.objects.all()  