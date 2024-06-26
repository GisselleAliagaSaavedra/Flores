from django.shortcuts import render, get_object_or_404, redirect
from .models import Region, Commune, Category, Product, Customer, Order, OrderItem
from django.http import HttpResponse, JsonResponse
from .forms import CustomerForm

def login(request):
    return render(request, "login.html")

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

def products_by_category(request, category_name):
    category = get_object_or_404(Category, name__iexact=category_name)
    products = Product.objects.filter(category=category)
    return render(request, 'productos.html', {'category': category, 'products': products})

def create_customer(request):
    if request.method == 'POST':
        form = CustomerForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('')  # Redirige a una página de éxito o la que prefieras
    else:
        form = CustomerForm()
    
    return render(request, 'metodoPago.html', {'form': form})


