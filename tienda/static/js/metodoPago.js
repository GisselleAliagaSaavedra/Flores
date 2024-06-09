function mostrarMensaje(id, mensaje) {
    document.getElementById(id).textContent = mensaje;
}

function validarFormulario() {
    const campos = [
        { id: "email", mensajeId: "mensajeEmail" },
        { id: "nombre", mensajeId: "mensajeNombre" },
        { id: "apellido", mensajeId: "mensajeApell" },
        { id: "telefono", mensajeId: "mensajeTelefono" },
        { id: "direccion", mensajeId: "mensajeDirecc" },
        { id: "region", mensajeId: "mensajeRegion" },
        { id: "comuna", mensajeId: "mensajeComuna" }
    ];

    let camposLlenos = campos.every(campo => {
        const valor = document.getElementById(campo.id).value;
        mostrarMensaje(campo.mensajeId, valor === "" ? "*" : " ");
        return valor !== "";
    });

    if (camposLlenos) {
        new bootstrap.Modal(document.getElementById('modalModal')).show();
    } else {
        alert('Todos los campos deben estar rellenados.');
    }
}
