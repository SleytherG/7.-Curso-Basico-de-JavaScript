let estudiantes = ['Juan','Alberto','Maria','Sergio','Rosa','Daniel'];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(let i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

let estudiantes = ['Juan','Alberto','Maria','Sergio','Rosa','Daniel'];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(let estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}