# Generated by Django 3.2.7 on 2021-09-25 02:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Permits', '0005_rename_departments_department'),
    ]

    operations = [
        migrations.CreateModel(
            name='Module',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.CharField(blank=True, max_length=40)),
            ],
        ),
        migrations.DeleteModel(
            name='Department',
        ),
    ]
