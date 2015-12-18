# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('urls', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='url',
            name='createDate',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='url',
            name='target',
            field=models.URLField(null=True),
        ),
        migrations.AlterField(
            model_name='url',
            name='views',
            field=models.PositiveIntegerField(null=True),
        ),
    ]
