# Generated by Django 3.1.7 on 2021-03-03 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Marklist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Roll_Number', models.CharField(max_length=15)),
                ('Student_Name', models.CharField(max_length=100)),
                ('Maths_mark', models.IntegerField()),
                ('Physics_Mark', models.IntegerField()),
                ('Chemistry_Mark', models.IntegerField()),
            ],
        ),
    ]
