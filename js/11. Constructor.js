// function auto(marca,modelo,año) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.año = año;
// }
// let auto1 = new auto("Tesla","Model 3",2020);
// let auto2 = new auto("Tesla","Model X", 2020);
// let auto3 = new auto("Toyota","Corolla",2018);

// function auto(marca,modelo,año) {
//     for(let i=0;i<5;i++) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.año = año;
//         let marca = prompt(`Ingrese la marca del auto N°${i}`);
//         let modelo = prompt(`Ingrese el modelo del auto N°${i}`);
//         let año = prompt(`Ingrese el año del auto N°${i}`);
//         let auto1 = new auto(marca,modelo,año);
//     }
// }
// function auto(marca,modelo,annio) {
//     this.marca = marca;
//     this.modelo = modelo;
//     this.annio = annio;
// }

function persona(nombre,edad,peso) {
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
}

let personas = [];
let nombre;
let edad;
let peso;
for(let i = 0; i < 2; i++){
    nombre = prompt("Ingresa tu nombre: ");
    edad = parseInt(prompt("Ingresa tu edad: "));
    peso = parseFloat(prompt("Ingresa tu peso en KG"));
    personas.push(nombre);
    personas.push(edad);
    personas.push(peso);
}
let personasa = [];
for(let i = 0; i< personas.length; i++) {
    personasa.push(new persona(,personas.edad[edad],personas.peso[peso]));
}
console.log(personasa);
