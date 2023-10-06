document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const mensajeError = document.getElementById("mensajeError");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los valores de los campos
        const id = formulario.id.value;
        const nombre = formulario.nombre.value;
        const apellidos = formulario.apellidos.value;
        const telefono = formulario.telefono.value;
        const correo = formulario.correo.value;
        const edad = formulario.edad.value;
        const fechaNacimiento = formulario.fechaNacimiento.value;

        // Almacena los errores en un objeto donde la clave es el nombre del campo y el valor es el error
        const errores = {};

        // Validar ID (5 dígitos exactos)
        if (!/^\d{5}$/.test(id)) {
            errores.id = "El ID debe tener 5 dígitos exactos.";
        }

        // Validar nombre y apellidos (no pueden estar vacíos)
        if (nombre.trim() === "") {
            errores.nombre = "El nombre no puede estar vacío.";
        }

        // Validar teléfono (###)###-####
        if (!/^\(\d{3}\)\d{3}-\d{4}$/.test(telefono)) {
            errores.telefono = "El teléfono debe tener el formato (###)###-####.";
        }

        // Validar correo electrónico
        if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(correo)) {
            errores.correo = "El correo electrónico no es válido.";
        }

        // Validar edad (número positivo)
        const edadNum = parseInt(edad);
        if (isNaN(edadNum) || edadNum <= 0) {
            errores.edad = "La edad debe ser un número positivo.";
        }

        // Validar fecha de nacimiento (AAAA-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
            errores.fechaNacimiento = "La fecha de nacimiento debe tener el formato AAAA-MM-DD.";
        }

        // Limpiar mensajes de error previos
        const errorElements = document.querySelectorAll(".error");
        errorElements.forEach(element => element.textContent = "");

        // Mostrar errores debajo de cada entrada en color rojo
        for (const campo in errores) {
            if (errores.hasOwnProperty(campo)) {
                const inputElement = document.getElementById(campo);
                const errorElement = inputElement.nextElementSibling; // El siguiente elemento es el <span> para el error
                errorElement.textContent = errores[campo];
                errorElement.style.color = "red";
            }
        }

        // Comprobar si hay errores generales
        if (Object.keys(errores).length === 0) {
            // Si no hay errores, se envía el formulario o realizas otras acciones aquí
            mensajeError.textContent = "Formulario enviado con éxito.";



            // Crear un objeto con los datos del envío
        const envio = {
            id,
            nombre,
            apellidos,
            telefono,
            correo,
            edad,
            fechaNacimiento
        };
         // Obtener o inicializar un arreglo de envíos (puedes usar el almacenamiento local para mantener los envíos)
        const envios = JSON.parse(localStorage.getItem("envios")) || [];
         // Agregar el nuevo envío al arreglo
        envios.push(envio);
         // Guardar el arreglo actualizado en el almacenamiento local
        localStorage.setItem("envios", JSON.stringify(envios));
         // Redireccionar a la página de resultados
        window.location.href = "resultados.html";
        }
        
    });
});
