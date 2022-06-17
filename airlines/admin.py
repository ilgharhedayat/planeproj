from django.contrib import admin

# from import_export.admin import ImportExportModelAdmin
from .models import Airline, ReturnTicket

admin.site.register(Airline)
admin.site.register(ReturnTicket)
# Register your models here.
# @admin.register(Airline)
# class AirlineAdmin(ImportExportModelAdmin):
#     pass
