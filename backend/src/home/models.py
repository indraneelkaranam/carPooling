from django.db import models
from datetime import datetime

class info(models.Model):
    name = models.CharField(max_length=120)
    password = models.CharField(max_length=120)

    def __str__(self):
        return self.name


class Register(models.Model):
    firstname = models.CharField(max_length=120)
    lastname = models.CharField(max_length=120)
    gender = models.CharField(max_length=40)
    date = models.CharField(max_length=120)
    password = models.CharField(max_length=120)
    email = models.CharField(max_length=120)
    phonenumber = models.CharField(max_length=120)

    def __str__(self):
        return self.firstname+self.lastname

class History(models.Model):
    email = models.CharField(max_length=120)
    source = models.CharField(max_length=120)
    destination = models.CharField(max_length=120)
    timeofleave = models.TimeField()
    dateofleave = models.DateField(null = True)
    price = models.CharField(max_length=120)
    seats = models.IntegerField()
    anything = models.CharField(max_length=120)
    phonenumber = models.CharField(max_length=120)

    def __str__(self):
        return self.source+self.destination


class Booking(models.Model):
    passenger_email =   models.CharField(max_length=120)
    offer_email = models.CharField(max_length=120)
    source = models.CharField(max_length=120)
    destination = models.CharField(max_length=120)
    timeofleave = models.TimeField()
    dateofleave = models.DateField(null = True)
    price = models.CharField(max_length=120)
    seats =  models.IntegerField()
    anything = models.CharField(max_length=120)
    phonenumber = models.CharField(max_length=120)

    def __str__(self):
        return self.passenger_email+self.offer_email   

class Notification(models.Model):
    offer_email = models.CharField(max_length=120)
    firstname = models.CharField(max_length=120)
    lastname = models.CharField(max_length=120)
    gender = models.CharField(max_length=40)
    date = models.CharField(max_length=120)
    passenger_email = models.CharField(max_length=120)
    phonenumber = models.CharField(max_length=120)
    cleared = models.CharField(max_length=120)
    dateofjourney = models.CharField(max_length=120)
    source = models.CharField(max_length=120)
    destination  = models.CharField(max_length=120)

    def __str__(self):
        return self.offer_email+self.passenger_email     