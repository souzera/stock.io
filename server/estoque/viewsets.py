from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from estoque import serializers
from estoque import models
from django_filters.rest_framework import DjangoFilterBackend

class FornecedorViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.FornecedorSerializer
    queryset = models.Fornecedor.objects.all()

    filter_backends = [DjangoFilterBackend]

    filter_fields = (
        'usuario'
    )

    def filter_queryset(self, queryset):
        for backend in list(self.filter_backends):
            queryset = backend().filter_queryset(self.request, queryset, view=self)

        return queryset

class ProdutoViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ProdutoSerializer
    queryset = models.Produto.objects.all()

    filter_backends = [DjangoFilterBackend]

    filter_fields = (
        'fornecedor'
    )

    @action(detail=False, methods=['post'])
    def add(self, request):
        return Response({'status':False})

class ClienteViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ClienteSerializer
    queryset = models.Cliente.objects.all()

class UsuarioViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UsuarioSerializer
    queryset = models.Usuario.objects.all()

    @action(detail=False, methods=['post'])
    def signin(self, request):

        password =  request.data["password"]
        remember = request.data["remenber"]
        username = request.data["username"]

        try:
            usuario = models.Usuario.objects.get(username=username)
            if (password == usuario.password):
                return Response({'data':usuario.get_data_dict(), 'status':True})
            return Response({'message':'Senha Incorreta', 'status':False})
        except:
            return Response({'message':"Usuario não existe", 'status':False})

