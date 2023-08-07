from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login

# Create your views here.

def index(request):
    return HttpResponse('Olá Stock.io')

## Usuario

#TODO: Criptografar a senha do usuario
def details_usuario(request, usuario_id):
    from .models import Usuario
    usuario = Usuario.objects.get(pk=usuario_id)
    return JsonResponse({
        'usuario_id': usuario_id,
        'data': usuario.get_data_dict()
    })

def results_usuario(request):
    from .models import Usuario
    usuarios_list = Usuario.objects.order_by('username')
    data = [usuario.get_data_dict() for usuario in usuarios_list]
    return JsonResponse({'data': data})

def find_username(request, username):
    from .models import Usuario
    usuario = Usuario.objects.get(username=username)
    data = usuario.get_data_dict()
    return JsonResponse({'data': data})


def logging(resquest):
    from .models import Usuario
    if resquest.method == 'POST':
        username = resquest.POST['username']
        password = request.POST['password']
        print(f'username: {username}\npassword: {password}')
        user =  authenticate(resquest, username=username, password=password)
        if user is not None:
            login(resquest, user)
            usuario = Usuario.objects.get(username=username)
            data = usuario.get_data_dict()
            return JsonResponse({'data':data})
        else:
            return JsonResponse({'message':'Não foi possível efetuar o login'})


## Fornecedor


def details_fornecedor(request, fornecedor_id):
    from .models import Fornecedor
    fornecedor = Fornecedor.objects.get(pk=fornecedor_id)
    return JsonResponse({
        'fornecedor_id': fornecedor_id,
        'data': fornecedor.get_data_dict()
    })

def results_fornecedor(request):
    from .models import Fornecedor
    fornecedor_list = Fornecedor.objects.order_by('nome')
    data = [fornecedor.get_data_dict() for fornecedor in fornecedor_list]
    return JsonResponse({'data':data})

def find_fornecedor(request, cnpj):
    from .models import Fornecedor
    fornecedor = Fornecedor.objects.get(cnpj=cnpj)
    data = fornecedor.get_data_dict()
    return JsonResponse({'data':data})


## Produto

def results_produto(request):
    from .models import Produto
    produto_list = Produto.objects.order_by('nome')
    data = [produto.get_data_dict() for produto in produto_list]
    return JsonResponse({'data':data})

def details_produto(request, produto_id):
    from .models import Produto
    produto = Produto.objects.get(pk=produto_id)
    return JsonResponse({
        'produto_id': produto_id,
        'data' : produto.get_data_dict()
    })

def add_produto(request):
    from .models import Produto
    from .models import Fornecedor
    if request.method == 'POST':
        nome = request.POST['nome']
        preco = request.POST['preco']
        #cnpj
        resquest_fornecedor = request.POST['fornecedor_cnpj']

        fornecedor = Fornecedor.objects.get(cnpj=request_fornecedor.cnpj);
        print(fornecedor)

        produto = Produto(
            nome = nome,
            preco = preco,
            fornecedor = fornecedor
        )

        produto.save()

        return JsonResponse({'message':'Produto adicionado'}, status=200)
    else:
        return JsonResponse({'message':'Não foi possível adicionar o produto'}, status=405)


# Clientes

def results_client(request):
    from .models import Cliente
    clientes_list = Cliente.objects.order_by("nome")
    data = [client.get_data_dict() for client in clientes_list]
    return JsonResponse({'data':data})