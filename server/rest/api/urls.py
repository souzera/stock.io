from django.urls import path

from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:usuario_id>/usuario', views.details_usuario, name='usuario_details'),
    path('user/<str:username>', views.find_username, name='find_username'),
    path('usuarios', views.results_usuario, name='usuarios'),
    path('logging', views.logging, name='logging',),
    path('<int:fornecedor_id>/fornecedor', views.details_fornecedor, name='fornecedor_details'),
    path('fornecedores', views.results_fornecedor, name='fornecedores'),
    path('fornecedor/<str:cnpj>', views.find_fornecedor, name='find_fornecedor'),
    path('<int:produto_id>/produto', views.details_produto, name='produto_details'),
    path('produtos', views.results_produto, name='produtos'),
    path('add-produto', views.add_produto,name='add-produto'),
    path('clientes', views.results_client, name='clientes'),
]

