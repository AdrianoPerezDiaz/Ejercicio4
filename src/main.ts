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
const estiloNombre = "font-size:20px; background:green, strong";
const grupo1 : Grupo = {
    nombre : "%cThe Beatles", estiloNombre,
    año : 1960,
    activo : true,
    género :  "🎵 Pop Rock",
}
const grupo2 : Grupo =  {
    nombre : "%cQueen", estiloNombre,
    año : 1970,
    activo: false,
    género : "🎸 Rock",
}
const grupo3 : Grupo = {
    nombre : "%cAC DC",estiloNombre,
    año: 1973,
    activo: true,
    género : "🎸 Rock",
}
const grupo4 : Grupo = {
    nombre : "%cThe Rolling Stones",estiloNombre,
    año : 1962,
    activo: true,
    género : "🎸 Rock",
}
console.log(grupo1);
console.log(grupo2);
console.log(grupo3);
console.log(grupo4);