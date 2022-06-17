# Generated by Django 3.2.13 on 2022-06-16 18:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('airlines', '0003_auto_20220605_0854'),
    ]

    operations = [
        migrations.AlterField(
            model_name='airline',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.CreateModel(
            name='ReturnTicket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fly_class', models.CharField(max_length=12)),
                ('percent', models.PositiveIntegerField()),
                ('description', models.CharField(max_length=255)),
                ('airline', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ticket_return', to='airlines.airline')),
            ],
        ),
    ]