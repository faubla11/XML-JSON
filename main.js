// Función para cargar el archivo JSON y manejar los datos
fetch('datos.json')
    .then(response => response.json())// Convierte la respuesta a JSON
    .then(data => {
        // El código para llenar el selector y manejar la selección
        // Guarda los datos en una variable
        var mydata = data;
        var contenido = document.querySelector("#contenido");
        var selector = document.getElementById("select");

        // Llena el selector con los nombres de los estudiantes
        for (let valor of mydata) {
            let option = document.createElement("option");
            option.value = valor.Nombre; // El valor de la opción es el nombre del estudiante
            option.innerText = valor.Nombre; // El texto visible de la opción es el nombre del estudiante
            selector.appendChild(option); // Añade la opción al selector
        }

        // Añade un event listener para manejar la selección de un estudiante
        selector.addEventListener("change", function () {
            mostrar(this); // Llama a la función mostrar cuando cambia la selección
        });

        function mostrar(nombre) {
            contenido.innerHTML = "";// Limpia el contenido actual
            for (let valor of mydata) {
                if (nombre.value == valor.Nombre) { // Comprueba si el nombre seleccionado coincide
                    contenido.innerHTML += `
                        <tr>
                            <td>${valor.Cédula}</td>
                            <td>${valor.Nombre}</td>
                            <td>${valor.Dirección}</td>
                            <td>${valor.Teléfono}</td>
                            <td>${valor.Correo}</td>
                            <td>${valor.Curso}</td>
                            <td>${valor.Paralelo}</td>
                        </tr>
                    `;// Añade una fila con los datos del estudiante
                }
            }
        }
    })
    .catch(error => console.error('Error cargando el archivo JSON:', error));// Muestra un error si no se puede cargar el JSON
