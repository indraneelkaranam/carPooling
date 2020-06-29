from home.models import Booking
from rest_framework import serializers

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ('passenger_email','offer_email','source','destination','timeofleave','dateofleave','price','seats','anything','phonenumber')