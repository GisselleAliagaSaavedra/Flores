function validarFormulario() {
    const campos = [
        { id: "email", mensajeId: "mensajeEmail" },
        { id: "nombre", mensajeId: "mensajeNombre" },
        { id: "apellidos", mensajeId: "mensajeApell" },
        { id: "direccion", mensajeId: "mensajeDirecc" },
        { id: "numero", mensajeId: "mensajeNumero" },
        { id: "pais", mensajeId: "mensajePais" },
        { id: "region", mensajeId: "mensajeRegion" },
        { id: "ciudad", mensajeId: "mensajeCiudad" },
        { id: "casa", mensajeId: "mensajeCasa" }
    ];

    let camposLlenos = true;

    campos.forEach(campo => {
        const valor = document.getElementById(campo.id).value;
        document.getElementById(campo.mensajeId).textContent = valor === "" ? "*" : " ";
        if (valor === "") {
            camposLlenos = false;
        }
    });

    if (camposLlenos) {
        const myModal = new bootstrap.Modal(document.getElementById('modalModal'));
        myModal.show();
    } else {
        alert('Todos los campos deben estar rellenados.');
    }

    //aqui tengo un error>>salta el modal justo despues
    //de la alerta sin esperar a poder rellenar los campos
    //ARREGLAR DESPUES :c
};

