# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('urls', '0003_auto_20150622_1225'),
    ]

    operations = [
        migrations.RenameField(
            model_name='sentenceurl',
            old_name='sentence',
            new_name='identifier',
        ),
    ]
