# Generated by Django 2.1 on 2019-11-15 08:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_history'),
    ]

    operations = [
        migrations.AlterField(
            model_name='history',
            name='email',
            field=models.CharField(max_length=120),
        ),
    ]