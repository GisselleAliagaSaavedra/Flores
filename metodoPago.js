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

    campos.forEach(campo => {
        const valor = document.getElementById(campo.id).value;
        document.getElementById(campo.mensajeId).textContent = valor === "" ? "*" : " ";
    });
};

