// function saludar() {
//     console.log("hola mundo!!")
// }
// saludar()

// function sumar() {
//     let numeroA = 15
//     let numeroB = 30
//     let resultado = numeroA + numeroB
    
//     return resultado
// }
// console.log(sumar())
// let calculo = sumar()
// console.log("El resultado de la suma es "+calculo)
// let numeroA = 50

// const restar = function () {
//     let numeroA = 15
//     let numeroB = 30
    
//     let resultado = numeroA - numeroB
//     // return resultado
//     console.log(numeroA)
// }
// restar()
// console.log(numeroA)


// let primerNumero = parseInt(prompt("Ingrese el primer numero"))
// let segundoNumero = parseInt(prompt("Ingrese el segundo numero"))

// function sumar (numeroA, numeroB) {
//     let resultado = numeroA + numeroB
//     console.log("El resultado es: "+resultado)
// }

// sumar(primerNumero, segundoNumero)


// const calculadoraDel10 = function (primerNumero) {
//     console.log(primerNumero*10)
// }
// const calculadoraDel10 = (primerNumero) => {
//     console.log(primerNumero*10)
// }
// const calculadoraDel10 = primerNumero => {
//     console.log(primerNumero*10)
// }
// const calculadoraDel10 = primerNumero => primerNumero*10

// console.log(calculadoraDel10(10))

// const multiplicacion = (primerNumero, segundoNumero) => primerNumero*segundoNumero
// console.log(multiplicacion(5,10))




//Funciones
function sumar() {
    let numeroA = parseInt(prompt("Ingrese el primer numero"))
    let numeroB = parseInt(prompt("Ingrese el segundo numero"))
    let resultado = numeroA + numeroB
    alert(numeroA + " + " + numeroB + " = " + resultado)
}

function restar() {
    let numeroA = parseInt(prompt("Ingrese el primer numero"))
    let numeroB = parseInt(prompt("Ingrese el segundo numero"))
    let resultado = numeroA - numeroB
    alert(numeroA + " - " + numeroB + " = " + resultado)
}

function multiplicar() {
    let numeroA = parseInt(prompt("Ingrese el primer numero"))
    let numeroB = parseInt(prompt("Ingrese el segundo numero"))
    let resultado = numeroA * numeroB
    alert(numeroA + " x " + numeroB + " = " + resultado)
}

function dividir() {
    let numeroA = parseInt(prompt("Ingrese el primer numero"))
    let numeroB = parseInt(prompt("Ingrese el segundo numero"))
    let resultado = numeroA / numeroB
    alert(numeroA + " / " + numeroB + " = " + resultado)
}


let opcion = parseInt(prompt("Elija una opcion: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-salir"))

while (opcion !== 5) {
    switch(opcion) {
        case 1:
            sumar()
            break
        case 2:
            restar()
            break
        case 3:
            multiplicar()
            break
        case 4:
            dividir()
            break
        default:
            alert("Opcion incorrecta")
            break
    }

    opcion = parseInt(prompt("Elija una opcion: \n 1-sumar \n 2-restar \n 3-multiplicar \n 4-dividir \n 5-salir"))
}

alert("Finalizando programa, gracias!!!")