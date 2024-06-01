//Variables
let color = "naranja"
let años = 45
let nombre = "Luther"

// Constantes
const nacionalidad = "venezolana"
let iva = 21

// Prompt (la información que recibe la guarda como si fuera texto)
nombre = prompt("Ingresa nombre: ")
años = prompt("Ingresa edad: ")


console.log(nombre, años)

//Concatenación

alert("Mi nombre es: "+nombre+" y tengo: "+años+" años de edad, también mi nacionalidad es "+nacionalidad)

// Operaciones
let num1 = 1
let num2 =15

let resultado = num1+num2
console.log(resultado)

let precio = parseInt /*transforma en intero el valor spring*/ (prompt("Ingrese valor"))
let total = precio*iva
alert("El precio final con iva es de: $"+total)