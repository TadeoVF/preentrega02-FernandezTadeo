// funcion constructora de objetos
function constructora (nombre, edad, cumpleaños, clase){
    this.nombre = nombre,
    this.edad = edad,
    this.cumpleaños = cumpleaños,
    this.clase = clase
}
  
//declaro los cumpleaños de los alumnos
  const cumCarlos = new Date(2010, 5, 28);
  const cumBriana = new Date(2009, 3, 12);
  const cumSaul = new Date(2007, 9, 2);
  const cumBianca = new Date(2008, 8, 18);

// array con los alumnos
const  arrayAlumnos =  []

// agrego los alumnos al array
arrayAlumnos.push(new constructora("Carlos", 13, cumCarlos, "1B"))
arrayAlumnos.push(new constructora("Briana", 14, cumBriana, "2A"))
arrayAlumnos.push(new constructora("Saul", 16, cumSaul, "4A"))
arrayAlumnos.push(new constructora("Bianca", 15, cumBianca, "3B"))

//funcion para que las fechas me quede dd/mm/yyyy
function cambiarFormatoFecha(fecha) {
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let año = fecha.getFullYear();
    let cambioFecha = `${dia}/${mes}/${año}`;
    return cambioFecha;
  }

// utilizo forEach para iterar el array y cambiar el formato del cumpleaños de los alumnos
arrayAlumnos.forEach (alumno => {
  alumno.cumpleaños = cambiarFormatoFecha(alumno.cumpleaños)
});


// empezamos con el ciclo de busqueda
const buscarAlumno = prompt("Ingrese el nombre del alumno que desea encontrar");
let encontrado

// aqui empezara la busqueda en caso que el prompt sea correcto
for(let i = 0; i<arrayAlumnos.length; i++){
  if (arrayAlumnos[i].nombre === buscarAlumno){
    encontrado = arrayAlumnos[i];
  }
}

// si la busqueda se realizo y el prompt coincidia con el nombre de algun alumno,
// la consola mostrara su informacion, de no encontrarlo, avisará
if (encontrado) {
  console.log("Encontramos al alumno:");
  console.log(encontrado);
} else {
  console.log("No encontramos al alumno, refresque la página e intentelo de nuevo");
}