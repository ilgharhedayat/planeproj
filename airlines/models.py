from django.db import models
from django_extensions.db.models import TimeStampedModel


# Create your models here.
class Airline(TimeStampedModel):
    name = models.CharField(max_length=250, verbose_name="نام شرکت هواپیمایی ")
    symbol = models.CharField(max_length=10, verbose_name="نماد")
    logo = models.ImageField(upload_to="", verbose_name="لوگو")
    base_url = models.URLField()
    username = models.CharField(max_length=125, blank=True, verbose_name="نام کاربری")
    password = models.CharField(max_length=125, blank=True, verbose_name="رمز عبور")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "ایرلاین"
        verbose_name_plural = "ایرلاین ها"


class ReturnTicket(models.Model):
    airline = models.ForeignKey(Airline, on_delete=models.CASCADE, related_name='ticket_return')
    fly_class = models.CharField(max_length=12)
    percent = models.PositiveIntegerField()
    description = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.airline}-{self.fly_class}-{self.percent}'
