"""
URL configuration for rest project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from rest_framework import routers
from estoque import viewsets

route = routers.DefaultRouter()

route.register('produtos', viewsets.ProdutoViewSet ,basename='produto')
route.register('usuarios', viewsets.UsuarioViewSet, basename='usuario')
route.register('fornecedores', viewsets.FornecedorViewSet, basename='fornecedor')
route.register('clientes', viewsets.ClienteViewSet, basename='cliente')

urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'', include(route.urls)),
]
