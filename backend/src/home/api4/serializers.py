from rest_framework import serializers

from home.models import Notification


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ('offer_email','firstname','lastname','gender','date','passenger_email','phonenumber','cleared','dateofjourney','source','destination')    