from django.db import models
from uuid import uuid4

class Usuario(models.Model):
    id_usuario = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    url_avatar = models.CharField(default='https://static.thenounproject.com/png/5034901-200.png')
    nome = models.CharField()
    username = models.CharField(unique=True)
    password = models.CharField()

    def __str__(self):
        return self.username

    def get_data_dict(self):
        return {
            'usuario_id': self.id_usuario,
            'url_avatar': self.url_avatar,
            'nome' : self.nome,
            'username' : self.username,
            'password': self.password
        }

class Fornecedor(models.Model):
    id_fornecedor = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=256)
    cnpj = models.CharField(max_length=256, unique=True)
    endereco = models.CharField(max_length=256)
    contato = models.CharField(max_length=128)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, default=None)

    def get_data_dict(self):
        return {
            'nome': self.nome,
            'cnpj':self.cnpj,
            'endereco': self.endereco,
            'contato': self.contato
        }

    def get_usuario(self):
        return usuario.id_usuario

    def __str__(self):
        return self.nome

class Produto(models.Model):
    id_produto = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=512)
    preco = models.FloatField()
    fornecedor = models.ForeignKey(Fornecedor, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, default=None)

    def get_data_dict(self):
        return {
            'nome' : self.nome,
            'preco' : self.preco,
            'fornecedor': self.fornecedor.get_data_dict(),
            'usuario': self.fornecedor.get_usuario()
        }

    def __str__(self):
        return self.nome

class Cliente(models.Model):
    id_cliente = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=256)
    cpf = models.CharField(max_length=256, unique=True)
    contato = models.CharField(max_length=256)
    endereco = models.CharField(max_length=256)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, default=None)

    def get_data_dict(self):
        return {
            'nome':self.nome,
            'cpf': self.cpf,
            'contato':self.contato,
            'endereco':self.endereco
        }

    def __str__(self):
        return self.nome

class Compra(models.Model):
    id_compra = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE,null=True)
    data_compra = models.DateField(auto_now=True)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, default=None)

    def get_data_dict(self):
        return {'data_compra': self.data_compra}

class CompraProduto(models.Model):
    id_compra_produto = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    compra = models.ForeignKey(Compra, on_delete=models.CASCADE)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, null=True)

    def get_data_dict(self):
        return {
            'compra':self.compra.get_data_dict(),
            'produto':self.produto.get_data_dict()
        }


