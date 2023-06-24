from pyexpat import model

from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Fornecedor(models.Model):
    nome = models.CharField(max_length=256)
    endereco = models.CharField(max_length=256)
    contato = models.CharField(max_length=128)

class Produto(models.Model):
    nome = models.CharField(max_length=512)
    preco = models.FloatField()
    fornecedor = models.ForeignKey(Fornecedor, on_delete=models.CASCADE)

class Compra(models.Model):
    data_compra = models.DateField(auto_now=True)

