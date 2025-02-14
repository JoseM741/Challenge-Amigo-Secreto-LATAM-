// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    // Validar entrada
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el array de amigos
    amigos.push(nombre);
    actualizarLista();
    
    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista actual

    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto de la lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Añade al menos un nombre.");
        return;
    }

    // Seleccionar un amigo aleatoriamente
    let index = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[index];

    // Mostrar el resultado en la interfaz
    mostrarResultado(amigoSecreto);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigoSecreto) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    // Crear el mensaje de resultado
    let mensaje = document.createElement("li");
    mensaje.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(mensaje);
}
