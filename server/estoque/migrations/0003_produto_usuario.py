# Generated by Django 4.2.4 on 2023-10-01 17:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('estoque', '0002_cliente_usuario_compra_usuario_fornecedor_usuario'),
    ]

    operations = [
        migrations.AddField(
            model_name='produto',
            name='usuario',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='estoque.usuario'),
        ),
    ]