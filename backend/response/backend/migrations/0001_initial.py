# Generated by Django 5.2 on 2025-05-02 07:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='education',
            fields=[
                ('title', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('content', models.TextField()),
                ('upload', models.ImageField(upload_to='')),
                ('category', models.CharField(choices=[('SF', 'Safe_driving'), ('TF', 'Traffic_rules'), ('VM', 'Vehicle_Maintainance')], max_length=25)),
            ],
        ),
    ]
