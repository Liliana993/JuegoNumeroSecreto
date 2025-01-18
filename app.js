//creamos la variable para número secreto
let numeroSecreto = 0;
//los intentos inicializan siempre en 1
let intentos = 0;
//iniciamos la lista de numeros vacia
let listaNumeroGenerado = [];
let numeroMaximo = 10;

//Esta función se encarga de crear el número secreto
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //mediante consola observamos como crece nuestro array
    console.log(numeroGenerado);
    console.log(listaNumeroGenerado);

    //si ya sorteamos todos los numeros de lista
    if(listaNumeroGenerado.length == numeroMaximo){
        asignarTextoElements('p', 'Ya se sortearon todos los números posibles');
    }else{
        //si el numero generado esta en las lista
    if(listaNumeroGenerado.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        //si no lo esta se agrega a la lista
        listaNumeroGenerado.push(numeroGenerado);
        return numeroGenerado;   
    }
    }
    
    
}

//selecionamos las etiquetas del html y le asignamos contenido con una funcion
function asignarTextoElements(etiqueta,texto){
let contenido = document.querySelector(etiqueta);
contenido.textContent = texto;
return;
}

function verificarIntento(){
let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
//removemos el disabled para que se active el boton de nuevo juego
document.getElementById('reiniciar').removeAttribute('disabled');
console.log(numeroUsuario == numeroSecreto);
//creamos las condiciones en caso de que el usuario acierte el número o no
if(numeroUsuario === numeroSecreto){
    asignarTextoElements('p', `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    //los operadores ternarios nos ayudan optimizar y minimizar el código
}else{
    if(numeroUsuario > numeroSecreto){
        asignarTextoElements('p', 'El número es mayor al número secreto')
    }else{
        asignarTextoElements('p', 'El numero es menor al numero secreto')
    }
    //cada vez que hacemos un intento el contador va incrementado
    intentos++;
    //Cuando no se acierta se vuelve a resetear el código
    limpiarCaja();
}
    return 
}

//función para limpiar la caja del input
function limpiarCaja(){
    document.querySelector('#numeroUsuario').value = '';
}

function condicionesIniciales(){
  //asignamos el texto que se mostrara en las etiquetas de texto 
  asignarTextoElements('h1', 'Bienvenid@al juego!');
  asignarTextoElements('p', `Adivina el número secreto entre 1 y ${numeroMaximo}.`);
  //generamos un nuevo número secreto
  numeroSecreto = generarNumeroSecreto();
  //iniciamos los intentos nuevamente en 1
  intentos = 1;
}

//Creamos la función de reiniciar juego
function reiniciarJuego(){
    //limpiamos la caja
    limpiarCaja();
    //agregamos nuevamente los mensajes iniciales
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();

