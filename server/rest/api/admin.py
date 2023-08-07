from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(Usuario)
admin.site.register(Fornecedor)
admin.site.register(Produto)
admin.site.register(Cliente)
admin.site.register(Compra)
admin.site.register(CompraProduto)
