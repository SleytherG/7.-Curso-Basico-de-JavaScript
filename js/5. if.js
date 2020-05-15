
// let edad = 18;
// if (edad === 18) {
//     console.log(`Hey puedes votar, porque tienes ${edad} años`);
// } else if (edad >= 18) {
//     console.log(`Puedes votar de nuevo`);
// } else {
//     console.log(`No puedes votar, aun eres menor de edad`);
// }
// Condicion ternaria
// condition ? true : false;

let jugador1 = parseInt(prompt(`Jugador 1:
                                Escoja una opcion:
                                1. Piedra
                                2. Papel
                                3. Tijera`));
let jugador2 = parseInt(prompt(`Jugador 2:
                                Escoja una opcion:
                                1. Piedra
                                2. Papel
                                3. Tijera`));
let piedra = 1;
let papel = 2;
let tijera = 3;


if(jugador1 === piedra) {
    if(jugador2 === piedra) {
    alert("Jugador 1: Escogiste piedra");   
    alert("Jugador 2: Escogiste piedra");
    alert("Es un empate!!!")
    }
}
if (jugador1 === piedra) {
    if ( jugador2 === papel) {
        alert("Jugador 1: Escogiste piedra");
        alert("Jugador 2: Escogiste papel")
        alert("Gana el Jugador 2!!!");
    }
}
if(jugador1 === piedra) {
    if(jugador2 === tijera) {
        alert("Jugador 1: Escogiste piedra");
        alert("Jugador 2: Escogiste tijera");
        alert("Gana el Jugador 1!!!");
    }
}

if(jugador1 === papel) {
    if(jugador2 === piedra) {
    alert("Jugador 1: Escogiste papel");   
    alert("Jugador 2: Escogiste piedra");
    alert("Gana el Jugador 1")
    }
}
if (jugador1 === papel) {
    if ( jugador2 === papel) {
        alert("Jugador 1: Escogiste papel");
        alert("Jugador 2: Escogiste papel")
        alert("Es un Empate!!!");
    }
}
if(jugador1 === papel) {
    if(jugador2 === tijera) {
        alert("Jugador 1: Escogiste papel");
        alert("Jugador 2: Escogiste tijera");
        alert("Gana el Jugador 2!!!");
    }
}

if(jugador1 === tijera) {
    if(jugador2 === piedra) {
    alert("Jugador 1: Escogiste tijera");   
    alert("Jugador 2: Escogiste piedra");
    alert("Gana el Jugador 2!!!")
    }
}
if (jugador1 === tijera) {
    if ( jugador2 === papel) {
        alert("Jugador 1: Escogiste tijera");
        alert("Jugador 2: Escogiste papel")
        alert("Gana el Jugador 1!!!");
    }
}
if(jugador1 === tijera) {
    if(jugador2 === tijera) {
        alert("Jugador 1: Escogiste tijera");
        alert("Jugador 2: Escogiste tijera");
        alert("Es un Empate!!!");
    }
}

