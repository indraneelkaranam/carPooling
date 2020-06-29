from rest_framework import serializers

from home.models import info,Register,History

class infoSerializer(serializers.ModelSerializer):
    class Meta:
        model = info
        fields = ('name','password')

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register
        fields = ('firstname','lastname','gender','date','password','email','phonenumber')     

          

