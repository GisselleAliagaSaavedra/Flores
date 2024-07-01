function validarFormulario() {
    const form = document.getElementById('formPayment');
    let valid = true;

    const fields = [
        { id: 'id_first_name', message: 'mensajeNombre', errorMessage: 'El nombre es obligatorio.' },
        { id: 'id_last_name', message: 'mensajeApell', errorMessage: 'El apellido es obligatorio.' },
        { id: 'id_email', message: 'mensajeEmail', errorMessage: 'El correo es obligatorio.' },
        { id: 'id_phone', message: 'mensajeTelefono', errorMessage: 'El teléfono es obligatorio.' },
        { id: 'id_address', message: 'mensajeDirecc', errorMessage: 'La dirección es obligatoria.' },
        { id: 'id_region', message: 'mensajeRegion', errorMessage: 'La región es obligatoria.' },
        { id: 'id_commune', message: 'mensajeComuna', errorMessage: 'La comuna es obligatoria.' }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const message = document.getElementById(field.message);

        if (!input.value) {
            message.textContent = field.errorMessage;
            valid = false;
        } else {
            message.textContent = '';
        }
    });

    const tipoDocumento = document.querySelector('input[name="tipoDocumento"]:checked');
    const metodoPago = document.querySelector('input[name="metodoPago"]:checked');

    if (!tipoDocumento) {
        alert('Seleccione un tipo de documento.');
        valid = false;
    }

    if (!metodoPago) {
        alert('Seleccione un método de pago.');
        valid = false;
    }

    if (valid) {
        const modal = new bootstrap.Modal(document.getElementById('modalModal'));
        modal.show();
    }
}
