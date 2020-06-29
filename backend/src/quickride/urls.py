from django.contrib import admin
from django.urls import path,include
from django.conf.urls import *
from django.conf import settings

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/',include('home.api.urls')),
    path('api2/',include('home.api2.urls')),
    path('api3/',include('home.api3.urls')),
    path('api4/',include('home.api4.urls'))
]
