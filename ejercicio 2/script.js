document.addEventListener("DOMContentLoaded", () => {
    const formUsuario = document.getElementById("formUsuario");
    const inputNombre = document.getElementById("nombre");
    const inputCorreo = document.getElementById("correo");
    const resultadoNombre = document.getElementById("resultadoNombre");
    const resultadoCorreo = document.getElementById("resultadoCorreo");
    const btnMostrar = document.getElementById("btnMostrar");
    const btnLimpiar = document.getElementById("btnLimpiar");

    //funcion para recuperar y mostrar los datos guardados
    function cargarDatosGuardados(llenarFormulario = false) {
        const nombreGuardado = localStorage.getItem("nombre");
        const correoGuardado = localStorage.getItem("correo");

        if (nombreGuardado) {
            resultadoNombre.innerHTML = `<strong>Nombre:</strong> ${nombreGuardado}`;
            if (llenarFormulario) inputNombre.value = nombreGuardado;
        } else {
            resultadoNombre.innerHTML = `<strong>Nombre:</strong> (Ninguno)`;
            if (llenarFormulario) inputNombre.value = "";
        }

        if (correoGuardado) {
            resultadoCorreo.innerHTML = `<strong>Correo:</strong> ${correoGuardado}`;
            if (llenarFormulario) inputCorreo.value = correoGuardado;
        } else {
            resultadoCorreo.innerHTML = `<strong>Correo:</strong> (Ninguno)`;
            if (llenarFormulario) inputCorreo.value = "";
        }
    }

    //ejecutar al iniciar la página para mantener la persistencia visual inicial (sin forzar los inputs)
    cargarDatosGuardados(false);

    formUsuario.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que la página se recargue por defecto

        const nombreInput = inputNombre.value;
        const correoInput = inputCorreo.value;

        localStorage.setItem("nombre", nombreInput);
        localStorage.setItem("correo", correoInput);

        //actualizar la interfaz visualmente de inmediato
        cargarDatosGuardados(false);

        //limpiar los campos del formulario
        formUsuario.reset();

        alert("¡Datos guardados exitosamente en localStorage!");
    });

    //evento del botón "Mostrar"
    btnMostrar.addEventListener("click", () => {
        cargarDatosGuardados(true);
        alert("Datos cargados en el formulario y en pantalla.");
    });

    //evento del botón "Limpiar"
    btnLimpiar.addEventListener("click", () => {
        localStorage.removeItem("nombre");
        localStorage.removeItem("correo");


        resultadoNombre.innerHTML = `<strong>Nombre:</strong> (Ninguno)`;
        resultadoCorreo.innerHTML = `<strong>Correo:</strong> (Ninguno)`;
        inputNombre.value = "";
        inputCorreo.value = "";

        alert("Se han eliminado los datos de localStorage.");
    });
});