document.addEventListener("DOMContentLoaded", function() {
    const tablaResultados = document.getElementById("tablaResultados");

    // Obtener los envíos almacenados en el almacenamiento local
    let envios = JSON.parse(localStorage.getItem("envios")) || [];

    // Recorrer los envíos y agregar filas a la tabla
    envios.forEach((envio, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${envio.id}</td>
            <td>${envio.nombre}</td>
            <td>${envio.apellidos}</td>
            <td>${envio.telefono}</td>
            <td>${envio.correo}</td>
            <td>${envio.edad}</td>
            <td>${envio.fechaNacimiento}</td>
            <td><button class="btn btn-danger eliminar-btn" data-index="${index}">Eliminar</button></td>
        `;
        tablaResultados.appendChild(fila);
    });

    // Agregar un evento de clic al botón "Eliminar Todos" para eliminar todos los datos
    document.getElementById("eliminarDatos").addEventListener("click", function() {
        envios = []; // Borra todos los datos en el arreglo envios
        actualizarTablaYLocalStorage();
    });

    // Agregar un evento de clic a los botones de eliminación
    const botonesEliminar = document.querySelectorAll(".eliminar-btn");
    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", function() {
            const index = parseInt(this.getAttribute("data-index"));
            envios.splice(index, 1);// Eliminar el registro del arreglo envios
            actualizarTablaYLocalStorage();// Actualizar la tabla y el almacenamiento local
        });
    });

    // Función para actualizar la tabla y el almacenamiento local
    function actualizarTablaYLocalStorage() {
        // Limpiar la tabla
        tablaResultados.innerHTML = "";

        // Recrear las filas con los registros actualizados
        envios.forEach((envio, index) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${envio.id}</td>
                <td>${envio.nombre}</td>
                <td>${envio.apellidos}</td>
                <td>${envio.telefono}</td>
                <td>${envio.correo}</td>
                <td>${envio.edad}</td>
                <td>${envio.fechaNacimiento}</td>
                <td><button class="btn btn-danger eliminar-btn" data-index="${index}">Eliminar</button></td>
            `;
            tablaResultados.appendChild(fila);
        });

        // Actualizar el almacenamiento local con los registros actualizados
        localStorage.setItem("envios", JSON.stringify(envios));
    }
});
