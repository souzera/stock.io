# Generated by Django 4.2.2 on 2023-08-07 02:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_fornecedor_cnpj_alter_usuario_url_avatar'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cliente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=256)),
                ('cpf', models.CharField(max_length=256, unique=True)),
                ('contato', models.CharField(max_length=256)),
                ('endereco', models.CharField(max_length=256)),
            ],
        ),
        migrations.AddField(
            model_name='compra',
            name='cliente',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.cliente'),
        ),
        migrations.AddField(
            model_name='compraproduto',
            name='cliente',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.cliente'),
        ),
    ]
