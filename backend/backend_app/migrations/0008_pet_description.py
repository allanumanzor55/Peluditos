# Generated by Django 3.2.9 on 2021-11-24 00:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_app', '0007_pet_showdetails'),
    ]

    operations = [
        migrations.AddField(
            model_name='pet',
            name='description',
            field=models.CharField(default='N/D', max_length=1000),
        ),
    ]
