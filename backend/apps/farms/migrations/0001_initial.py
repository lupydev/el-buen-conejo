# Generated by Django 4.2.6 on 2023-10-25 03:24

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
                        db_index=True,
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                        unique=True,
                    ),
                ),
                ("created", models.DateTimeField(auto_now_add=True)),
                ("updated", models.DateTimeField(auto_now=True)),
                ("is_active", models.BooleanField(default=True)),
                ("name", models.CharField(max_length=150)),
                ("address", models.CharField(max_length=150)),
            ],
            options={
                "verbose_name": "farm",
                "verbose_name_plural": "farm",
                "db_table": "farm",
                "ordering": ["name"],
            },
        ),
    ]
