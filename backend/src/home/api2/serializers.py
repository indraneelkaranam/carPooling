from home.models import History
from rest_framework import serializers

class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = ('email','source','destination','timeofleave','dateofleave','price','seats','anything','phonenumber')