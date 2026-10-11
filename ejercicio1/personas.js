
'use strict';

const personas = [
    { nombre: "Lilian Rosales", edad: 27, profesion: "Bachiller" },
    { nombre: "Gustavo González", edad: 28, profesion: "Arquitecto" },
    { nombre: "Génesis Deras", edad: 31, profesion: "Mercadóloga" },
    { nombre: "Reina Benítez", edad: 25, profesion: "Secretaria" },
    { nombre: "Hugo Pérez", edad: 34, profesion: "Diseñador" }
];

function renderizarPersonas() {
    const contenedor = document.getElementById("tabla-personas");
    const tabla = document.createElement("table");
    const encabezado = document.createElement("thead");
    const filaEncabezado = document.createElement("tr");

    ["Nombre", "Edad", "Profesión"].forEach(titulo => {
        const th = document.createElement("th");
        th.textContent = titulo;
        filaEncabezado.appendChild(th);
    });

    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);

    const cuerpo = document.createElement("tbody");
    personas.forEach(persona => {
        const fila = document.createElement("tr");

        [persona.nombre, persona.edad, persona.profesion].forEach(dato => {
            const celda = document.createElement("td");
            celda.textContent = dato;
            fila.appendChild(celda);
        });

        cuerpo.appendChild(fila);
    });

    tabla.appendChild(cuerpo);
    contenedor.appendChild(tabla);
}

document.addEventListener("DOMContentLoaded", renderizarPersonas);
