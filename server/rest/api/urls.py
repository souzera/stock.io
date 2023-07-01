from django.urls import path

from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('<int:usuario_id>/usuario', views.details_usuario, name='usuario_details'),
    path('usuarios', views.results_usuario, name='usuarios'),
    path('<int:fornecedor_id>/fornecedor', views.details_fornecedor, name='fornecedor_details'),
    path('fornecedores', views.results_fornecedor, name='fornecedores'),
    path('<int:produto_id>/produto', views.details_produto, name='produto_details'),
    path('produtos', views.results_produto, name='produtos'),
]

