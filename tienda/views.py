from django.shortcuts import render
from .models import Region, Commune, Category, Product, Customer, Order, OrderItem
from django.http import HttpResponse, JsonResponse


def index(request):
    return render(request, "index.html")

def ramos(request):
    return render(request, "ramos.html")

def canastos(request):
    return render(request, "canastos.html")

def contacto(request):
    return render(request, "contacto.html")

def carro(request):
    return render(request, "carrito.html")

def prepago(request):
    return render(request, "metodoPago.html")

def listar_comunas(request):
    comunas = Commune.objects.all()
    return render(request, 'list.html', {'comunas': comunas})

