const CLAVE_PAR = 'lab3-par';
const CLAVE_COMPLEJO = 'lab3-dato-complejo';
const CLAVE_ARREGLO = 'lab3-arreglo';

window.addEventListener('DOMContentLoaded', function () {
    const nombre = document.getElementById('nombre');
    const edad = document.getElementById('edad');
    const salida = document.getElementById('salida');


    function mostrar(mensaje) {
        const parrafo = document.createElement('p');
        parrafo.textContent = mensaje;
        salida.appendChild(parrafo);
    }

    function leerDatos() {
        const nombreIngresado = nombre.value.trim();
        const edadTexto = edad.value.trim();
        const edadIngresada = Number(edadTexto);

        if (!nombreIngresado || edadTexto === '' || !Number.isInteger(edadIngresada)
            || edadIngresada < 0 || edadIngresada > 120) {
            mostrar('Ingrese un nombre y una edad entera entre 0 y 120.');
            return null;
        }
        return { nombre: nombreIngresado, edad: edadIngresada };
    }

    function leerArreglo(clave) {
        try {
            const contenido = localStorage.getItem(clave);
            return contenido ? JSON.parse(contenido) : [];
        } catch (error) {
            mostrar('No se pudieron leer los datos guardados.');
            return [];
        }
    }


    document.getElementById('anadir').addEventListener('click', function () {
        const persona = leerDatos();
        if (!persona) return;
        localStorage.setItem(CLAVE_PAR, persona.nombre + '|' + persona.edad);
        mostrar('Par añadido: Nombre: ' + persona.nombre + ', Edad: ' + persona.edad);
    });


    document.getElementById('obtener').addEventListener('click', function () {
        const par = localStorage.getItem(CLAVE_PAR);
        if (par === null) {
            mostrar('No hay un par guardado.');
            return;
        }
        const partes = par.split('|');
        mostrar('Nombre: ' + partes[0] + ', Edad: ' + partes[1]);
    });


    document.getElementById('remover').addEventListener('click', function () {
        if (localStorage.getItem(CLAVE_PAR) === null) {
            mostrar('No hay un par que remover.');
            return;
        }
        localStorage.removeItem(CLAVE_PAR);
        mostrar('Se removió el último par guardado.');
    });


    document.getElementById('limpiar').addEventListener('click', function () {
        localStorage.clear();
        mostrar('Se limpió el localStorage.');
    });


    document.getElementById('guardar-complejo').addEventListener('click', function () {
        const persona = leerDatos();
        if (!persona) return;
        localStorage.setItem(CLAVE_COMPLEJO, JSON.stringify(persona));
        mostrar('Dato complejo guardado: Nombre: ' + persona.nombre + ', Edad: ' + persona.edad);
    });


    document.getElementById('restaurar-complejo').addEventListener('click', function () {
        const contenido = localStorage.getItem(CLAVE_COMPLEJO);
        if (contenido === null) {
            mostrar('No hay un dato complejo guardado.');
            return;
        }
        try {
            const persona = JSON.parse(contenido);
            mostrar('Nombre: ' + persona.nombre + ', Edad: ' + persona.edad);
        } catch (error) {
            mostrar('Error: el dato complejo guardado no es válido.');
        }
    });


    document.getElementById('guardar-arreglo').addEventListener('click', function () {
        const persona = leerDatos();
        if (!persona) return;
        const personas = leerArreglo(CLAVE_ARREGLO);
        personas.push(persona);
        localStorage.setItem(CLAVE_ARREGLO, JSON.stringify(personas));
        mostrar('Registro añadido al arreglo: Nombre: ' + persona.nombre + ', Edad: ' + persona.edad);
    });

    
    document.getElementById('restaurar-arreglo').addEventListener('click', function () {
        const personas = leerArreglo(CLAVE_ARREGLO);
        if (personas.length === 0) {
            mostrar('No hay registros guardados en el arreglo.');
            return;
        }
        personas.forEach(function (persona) {
            mostrar('Nombre: ' + persona.nombre + ', Edad: ' + persona.edad);
        });
    });
});
