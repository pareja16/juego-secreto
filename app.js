let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto; 
return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroDeUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`felicidades acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','el numero es menor');
        } else {
            asignarTextoElemento('p','el numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#numeroDeUsuario').value = '';
}

function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
//si el numero generado esta incluido en la lista hacemos una operacion si no hacemos otra
//si ya sorteamos todos los numeros
if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p','ya se sortearon todos los numeros posibles');
} else {

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "juego del numero secreto");
    asignarTextoElemento("p", `escribe un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function resetGame() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();