import "./style.css";

console.log("Hello Typescript!");
/*
Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

La información de los grupos que queremos mostrar:

Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).
Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.
*/
interface Grupo {
    nombre : string,
    año : number,
    activo : boolean,
    género : string,
}
//let Género : género = 🎵 Pop Rock
const estiloNombre = ("font-size:20px; background-color : green; font-weight: 800");
const grupo1 : Grupo = {
    nombre : "The Beatles",
    año : 1960,
    activo : true,
    género :  "🎵 Pop Rock",
}
const grupo2 : Grupo =  {
    nombre : "Queen", 
    año : 1970,
    activo: false,
    género : "🎸 Rock",
}
const grupo3 : Grupo = {
    nombre : "AC DC",
    año: 1973,
    activo: true,
    género : "🤘 Hard Rock",
}
const grupo4 : Grupo = {
    nombre : "Ludwig van Beethoven",
    año : 1770,
    activo : false,
    género : "🎼 Clásica",
}
const grupo5 : Grupo = {
    nombre : "The Rolling Stones",
    año : 1962,
    activo: true,
    género : "🎸 Rock",
};
console.log(`%c${grupo1.nombre}`, estiloNombre), console.log(`${grupo1.año},${grupo1.activo},${grupo1.género}`);
console.log(`%c${grupo2.nombre}`, estiloNombre), console.log(`${grupo2.año},${grupo2.activo},${grupo2.género}`);
console.log(`%c${grupo3.nombre}`, estiloNombre), console.log(`${grupo3.año},${grupo3.activo},${grupo3.género}`);
console.log(`%c${grupo4.nombre}`, estiloNombre), console.log(`${grupo4.año},${grupo4.activo},${grupo4.género}`);
console.log(`%c${grupo5.nombre}`, estiloNombre), console.log(`${grupo5.año},${grupo5.activo},${grupo5.género}`);