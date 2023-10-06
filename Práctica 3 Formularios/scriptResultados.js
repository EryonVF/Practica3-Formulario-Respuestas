// scriptResultados.js (en la página "resultados.html")
document.addEventListener("DOMContentLoaded", function() {
    const tablaResultados = document.getElementById("tablaResultados");

    // Obtener los envíos almacenados en el almacenamiento local
    let envios = JSON.parse(localStorage.getItem("envios")) || [];

    // Función para eliminar los datos de la tabla y del almacenamiento local
    function eliminarDatos() {
        tablaResultados.innerHTML = ""; // Limpia el contenido de la tabla
        envios = []; // Borra todos los datos en el arreglo envios
        localStorage.removeItem("envios"); // Borra los datos almacenados en el almacenamiento local
    }

    // Recorrer los envíos y agregar filas a la tabla
    envios.forEach((envio) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${envio.id}</td>
            <td>${envio.nombre}</td>
            <td>${envio.apellidos}</td>
            <td>${envio.telefono}</td>
            <td>${envio.correo}</td>
            <td>${envio.edad}</td>
            <td>${envio.fechaNacimiento}</td>
        `;
        tablaResultados.appendChild(fila);
    });

    // Agregar un evento de clic al botón "Eliminar Datos" para eliminar permanentemente los datos
    document.getElementById("eliminarDatos").addEventListener("click", eliminarDatos);
});
