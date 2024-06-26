
from django import forms
from .models import Customer

class CustomerForm(forms.ModelForm):
    class Meta:
        model = Customer
        fields = ['first_name', 'last_name', 'email', 'phone', 'address', 'region', 'commune']
        widgets = {
            'first_name': forms.TextInput(attrs={'class': 'form-control mb-3', 'placeholder': 'Nombre'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control mb-3', 'placeholder': 'Apellido'}),
            'email': forms.EmailInput(attrs={'class': 'form-control mb-3', 'placeholder': 'Email'}),
            'phone': forms.TextInput(attrs={'class': 'form-control mb-3', 'placeholder': 'Teléfono'}),
            'address': forms.TextInput(attrs={'class': 'form-control mb-3', 'placeholder': 'Dirección'}),
            'region': forms.Select(attrs={'class': 'form-control mb-3'}),
            'commune': forms.Select(attrs={'class': 'form-control mb-3'}),
        }
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['region'].empty_label = 'Región'
        self.fields['commune'].empty_label = 'Comuna'
