from django.urls import path

from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:usuario_id>/usuario', views.details_usuario, name='usuario_details'),
    path('user/<str:username>', views.find_username, name='find_username'),
    path('usuarios', views.results_usuario, name='usuarios'),
    #TODO: refazer
    path('login-validate/', views.logar, name='login-validate'),
    path('<int:fornecedor_id>/fornecedor', views.details_fornecedor, name='fornecedor_details'),
    path('fornecedores', views.results_fornecedor, name='fornecedores'),
    path('<int:produto_id>/produto', views.details_produto, name='produto_details'),
    path('produtos', views.results_produto, name='produtos'),
]

