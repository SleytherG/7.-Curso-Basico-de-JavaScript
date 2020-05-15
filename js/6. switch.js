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

switch(piedra) {
    case jugador1 === piedra && jugador2 === piedra:
        alert("Es un empate");
        break;
}