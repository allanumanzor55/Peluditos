# Generated by Django 3.2.7 on 2021-09-25 03:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Permits', '0006_auto_20210925_0249'),
    ]

    operations = [
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='N/D', max_length=40)),
                ('description', models.CharField(blank=True, max_length=40)),
            ],
        ),
        migrations.AddField(
            model_name='module',
            name='name',
            field=models.CharField(default='N/D', max_length=40),
        ),
        migrations.CreateModel(
            name='Permissions',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create', models.BooleanField(default=False)),
                ('read', models.BooleanField(default=False)),
                ('update', models.BooleanField(default=False)),
                ('delete', models.BooleanField(default=False)),
                ('module', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Permits.module')),
                ('role', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Permits.role')),
            ],
        ),
    ]
