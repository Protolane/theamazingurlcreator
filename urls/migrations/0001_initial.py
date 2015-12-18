# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='URL',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, auto_created=True, verbose_name='ID')),
                ('target', models.URLField()),
                ('createDate', models.DateTimeField()),
                ('views', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='SentenceURL',
            fields=[
                ('url_ptr', models.OneToOneField(serialize=False, parent_link=True, primary_key=True, auto_created=True, to='urls.URL')),
                ('sentence', models.CharField(max_length=255, unique=True)),
            ],
            bases=('urls.url',),
        ),
    ]
