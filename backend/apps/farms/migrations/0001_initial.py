<<<<<<< HEAD
# Generated by Django 4.2.6 on 2023-10-13 18:31
=======

# Generated by Django 4.2.6 on 2023-10-13 21:11
>>>>>>> back

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Farm",
            fields=[
                (
                    "id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("name", models.CharField(max_length=150)),
                ("address", models.CharField(max_length=150)),
                ("is_active", models.BooleanField(default=True)),
            ],
        ),
    ]
