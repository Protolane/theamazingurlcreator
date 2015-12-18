# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('urls', '0002_auto_20150616_1256'),
    ]

    operations = [
        migrations.CreateModel(
            name='OneDigitURL',
            fields=[
                ('url_ptr', models.OneToOneField(primary_key=True, serialize=False, auto_created=True, to='urls.URL', parent_link=True)),
                ('identifier', models.CharField(unique=True, max_length=1)),
            ],
            bases=('urls.url',),
        ),
        migrations.CreateModel(
            name='RegularRandomURL',
            fields=[
                ('url_ptr', models.OneToOneField(primary_key=True, serialize=False, auto_created=True, to='urls.URL', parent_link=True)),
                ('identifier', models.CharField(unique=True, max_length=10)),
            ],
            bases=('urls.url',),
        ),
        migrations.CreateModel(
            name='ShortURL',
            fields=[
                ('url_ptr', models.OneToOneField(primary_key=True, serialize=False, auto_created=True, to='urls.URL', parent_link=True)),
                ('identifier', models.CharField(unique=True, max_length=4)),
            ],
            bases=('urls.url',),
        ),
        migrations.CreateModel(
            name='TwoDigitsURL',
            fields=[
                ('url_ptr', models.OneToOneField(primary_key=True, serialize=False, auto_created=True, to='urls.URL', parent_link=True)),
                ('identifier', models.CharField(unique=True, max_length=2)),
            ],
            bases=('urls.url',),
        ),
        migrations.CreateModel(
            name='VeryLongURL',
            fields=[
                ('url_ptr', models.OneToOneField(primary_key=True, serialize=False, auto_created=True, to='urls.URL', parent_link=True)),
                ('identifier', models.CharField(unique=True, max_length=80)),
            ],
            bases=('urls.url',),
        ),
        migrations.AlterField(
            model_name='url',
            name='views',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
