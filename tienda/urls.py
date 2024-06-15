from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('ramos/', views.ramos),
    path('canastos/', views.canastos),
    path('contacto/', views.contacto),
    path('carro/', views.carro),
    path('carro/prepago', views.prepago),
    path('productos/<str:category_name>', views.products_by_category, name='products_by_category'),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)