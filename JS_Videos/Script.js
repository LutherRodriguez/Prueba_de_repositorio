// String
//let nombre = "Luther"
/*console.warn('El recurso remoto ha sido precargado pero luego de unos segundos no se ha utilizado')*/
// Numérica
//let edad = 45
//Booleana
//let sexoMasc = confirm('¿Tu sexo es masculino?')
//let sexFem = confirm('¿Tu sexo es femenino?')

// Condicionales
/*if

let tiempo = 'soleado'
if(tiempo == 'lluvioso'){
    console.warn('Llevar paraguas')
}else{
    console.log('Ir con remera')
}*/

/*
let adultoPresente = 'no'
let permisoFirmado = 'si'
let edadMinima = '17'

edadMinima = prompt('¿Qué edad tiene?')
adultoPresente = prompt('¿Hay un adulto presente?')
permisoFirmado = prompt('¿Tiene permiso firmado de sus padres?')


if(edadMinima >= 18){
    console.log('Puede entrar a la disco')
}else if(((adultoPresente == 'si')||(permisoFirmado=='si'))&&(edadMinima<18)){
    console.log('Puede entrar con el OK del adulto responsable')   
   }else{
        console.warn('Vuelve a casa')
   }
   */

//1. Crea un algoritmo que a partir de la respuesta del usuario pueda determinar 
//Cuántos mundiales vivió una persona.
//Ten en cuenta que se juega un mundial cada 4 años y que se han jugado 21 copas del mundo.


// Ciclos

/*
for(let i=0;i<10;i++){
    console.log('Iteración N° ' + i)
}
*/
/*
for(let i=0;i<10;i++){
    if(i==5){
        console.warn('Iteración interrumpida en el cliclo', i, 'por la clausula BREAK.')
    break
}
alert(i)
} 
*/
//for
/*
for(let i=0;i<10;i++){
    if(i==5){
        console.warn('Iteración salteada en el cliclo', i, 'por la clausula CONTINUE.')
    continue
}
alert(i)
} 
*/
//while
/*
let i = 1
while(i<6){
    console.log('Iteración N° '+i)
    i++
}
*/
//do while
/*
num = 1
do{
    num = prompt('Ingresar número: ')
    console.log(num)
}while(parseInt(num))
*/
//Switch
/*
let tiempo = prompt('¿Cómo está el tiempo en tu ciudad? Soleado - Lluvioso - Ventoso - Nevado')

switch(tiempo){
    case 'Lluvioso':
        alert('Lleva paraguas')
        break
    case 'Soleado':
        alert('No olvides ponerte protector solar')
        break
    case 'Ventoso':
        alert('No dejes objetos sueltos en el balcón!')
        break
    case 'Nevado':
        alert('Aprovecha de hacer angelitos!')
        break
    default:
        alert('Introdujiste una opción no valida')
        break
}
*/
//Algoritmos Simple vs condicional
/*
let entrada = prompt('Ingresa un nombre')
let nombre = 'Bart'

if(entrada==nombre){
    alert('Fui yo')
}else{
    alert('Yo no fui')
}
*/
/*
let numeroPersonaje = prompt('Ingresa un número del 1 al 5')

if(numeroPersonaje=='1'){
    alert('Elegiste a Homero')
}else if(numeroPersonaje=='2'){
    alert('Elegiste a Marge')
}else if(numeroPersonaje=='3'){
    alert('Elegiste a Bart')
}else if(numeroPersonaje=='4'){
    alert('Elegiste a Lisa')
}else if(numeroPersonaje=='5'){
    alert('Elegiste a Maggie')
}else{
    alert('ERROR')
}
*/
/*
let numeroPersonaje = prompt('Ingresa un número del 1 al 5')

switch(numeroPersonaje){
    case '1':
    alert('Elegiste a Homero')
    break
    case '2':
    alert('Elegiste a Marge')
    break
    case '3':
    alert('Elegiste a Bart')
    break
    case '4':
    alert('Elegiste a Lisa')
    break
    case '5':
    alert('Elegiste a Maggie')
    break
    default:
    alert('ERROR')
}
*/
/*
let cantidad = parseInt(prompt('Ingrese cantidad de repeticines'))
let texto = prompt('Ingrese texto a repetir')

for (let i=0; i<cantidad; i++){
    console.log(texto)
}

console.log('Espero haberlos iluminado. Gracias, vuelvan pronto')
*/
