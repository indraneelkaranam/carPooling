from django.contrib import admin

from .models import info,Register,History,Booking,Notification

admin.site.register(info)
admin.site.register(Register)
admin.site.register(History)
admin.site.register(Booking)
admin.site.register(Notification)
