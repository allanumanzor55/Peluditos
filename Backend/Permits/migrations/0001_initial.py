# Generated by Django 3.2.7 on 2021-09-04 21:21

from django.db import migrations, models
import django.utils.timezone
import model_utils.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('is_removed', models.BooleanField(default=False)),
                ('nombre', models.CharField(blank=True, max_length=30)),
                ('apellido', models.CharField(blank=True, max_length=30)),
                ('direccion', models.CharField(blank=True, max_length=100)),
                ('email', models.EmailField(blank=True, max_length=30)),
                ('password', models.CharField(blank=True, max_length=30)),
                ('fechaCreado', models.DateTimeField(auto_now_add=True, verbose_name='fechaCreado')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
