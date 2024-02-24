 // Selección de elementos
const display = document.querySelector('p');
const botonIniciar = document.getElementById('start');
const botonParar = document.getElementById('stop');
const botonReiniciar = document.getElementById('reset');

// Variables para rastrear el tiempo
let temporizador;
let horas = 0;
let minutos = 0;
let segundos = 0;

// Función para iniciar el temporizador
function iniciar() {
    temporizador = setInterval(actualizarTiempo, 1000);
    botonIniciar.disabled = true;
    botonParar.disabled = false;
}

// Función para detener el temporizador
function parar() {
    clearInterval(temporizador);
    botonIniciar.disabled = false;
    botonParar.disabled = true;
}

// Función para reiniciar el temporizador
function reiniciar() {
    clearInterval(temporizador);
    horas = 0;
    minutos = 0;
    segundos = 0;
    mostrarTiempo();
    botonIniciar.disabled = false;
    botonParar.disabled = true;
}

// Función para actualizar la pantalla del temporizador
function actualizarTiempo() {
    segundos++;
    if (segundos >= 60) {
        segundos = 0;
        minutos++;
        if (minutos >= 60) {
            minutos = 0;
            horas++;
        }
    }
    mostrarTiempo();
}

// Función para mostrar el tiempo en el display
function mostrarTiempo() {
    display.textContent = `${formatoTiempo(horas)}:${formatoTiempo(minutos)}:${formatoTiempo(segundos)}`;
}

// Función para dar formato a los números de tiempo
function formatoTiempo(tiempo) {
    return tiempo < 10 ? `0${tiempo}` : tiempo;
}
