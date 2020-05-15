let estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0) {
    let estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

let estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
while(estudiantes.length > 0) {
    console.log(estudiantes);
    let estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
(4) ["Maria", "Sergio", "Rosa", "Daniel"]
Hola, Maria
(3) ["Sergio", "Rosa", "Daniel"]
Hola, Sergio
(2) ["Rosa", "Daniel"]
Hola, Rosa
["Daniel"]
Hola, Daniel