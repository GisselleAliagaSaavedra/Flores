from django.contrib import admin
from .models import Region, Commune, Category, Product, Customer, Order, OrderItem

admin.site.register(Region)
admin.site.register(Commune)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Customer)
admin.site.register(Order)
admin.site.register(OrderItem)
