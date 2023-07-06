from pyexpat import model

from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.

class Usuario(models.Model):
    url_avatar = models.CharField()
    nome = models.CharField()
    username = models.CharField(unique=True)
    password = models.CharField()

    def __str__(self):
        return self.username

    def get_data_dict(self):
        return {
            'url_avatar': self.url_avatar,
            'nome' : self.nome,
            'username' : self.username,
            'password': self.password
        }

class Fornecedor(models.Model):
    nome = models.CharField(max_length=256)
    endereco = models.CharField(max_length=256)
    contato = models.CharField(max_length=128)

    def get_data_dict(self):
        return {
            'nome': self.nome,
            'endereco': self.endereco,
            'contato': self.contato
        }

class Produto(models.Model):
    nome = models.CharField(max_length=512)
    preco = models.FloatField()
    fornecedor = models.ForeignKey(Fornecedor, on_delete=models.CASCADE)

    def get_data_dict(self):
        return {
            'nome' : self.nome,
            'preco' : self.preco,
            'fornecedor': self.fornecedor.get_data_dict()
        }

class Compra(models.Model):
    data_compra = models.DateField(auto_now=True)

    def get_data_dict(self):
        return {'data_compra': self.data_compra}

class CompraProduto(models.Model):
    compra = models.ForeignKey(Compra, on_delete=models.CASCADE)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)

    def get_data_dict(self):
        return {
            'compra':self.compra.get_data_dict(),
            'produto':self.produto.get_data_dict()
        }


