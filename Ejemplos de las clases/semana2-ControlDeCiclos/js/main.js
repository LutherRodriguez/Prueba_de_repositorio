//IF

// let validar = false 

// if(validar) {
//     console.log("Variable verdadera")
// }

let fruta = "melon"
let mes = ""
let edad = 18

// if (fruta == "mandarina") {
//     console.log("Felicitaciones! arranco el otoño, temporada de mandarinas")
// } else if (fruta == "sandia") {
//     console.log("Estamos en verano porque hay sandias")
// } else {
//     console.log("Bananas y manzanas hay todo el año")
// }

//OR ||

// if (fruta == "sandia" || fruta == "melon") {
//     console.log("Efectivamente es verano")
// }

//AND &&

// if(fruta == "melon" && (mes == "febrero" || "diciembre" || "enero" || "marzo")) {
//     console.log("Fruta y mes del verano")
// } else {
//     console.log("Quizas no es del todo verano")
// }

// if (edad >= 18) {
//     console.log("sos mayor de edad")
// } else {
//     console.log("sos menor de edad")
// }


// CICLO FOR

// for ("desde"; "hasta"; "actualizacion") {
//     //bloque de codigo a ejecutar
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }

// let numero = parseInt(prompt("Bienvenido! Que tabla de multiplicar desea?"))
// console.log("Tabla de multiplicar del "+numero)
// for(let i = 1; i<=15; i++) {
//     let resultado = i*numero
//     console.log(numero+"x"+i+": "+resultado)
// }

// console.log("Cuenta regresiva")
// for(let i = 10; i>0; i--){
//     console.log(i)
//     if(i===2) {
//         console.log("abortamos despegue")
//         break
//     }
//     if(i===1) {
//         console.log("despegue")
//     }
// }


//WHILE

// let continuar = true
// while(continuar) {
//     let numero = parseInt(prompt("Bienvenido! Que tabla de multiplicar desea?"))
//     console.log("Tabla de multiplicar del "+numero)
//     for(let i = 1; i<=5; i++) {
//         let resultado = i*numero
//         console.log(numero+"x"+i+": "+resultado)
//     }

//     let confirmacion = prompt("Desea hacer otro calculo? (si/no)")
//     if (confirmacion=="no"){
//         continuar=false
//         console.log("Gracias!")
//     }
// }

//SWITCH...CASE

let continuar = true
while(continuar) {
    let pastas = parseInt(prompt("Ingrese 1 para lasagna, 2 para spaghetti, 3 para gnocchi, otro numero para salir"))
    switch(pastas) {
        case 1:
            console.log("Lasagna al ragu")
            break
        case 2: 
            console.log("Spaghetti alla carbonara")
            break
        case 3: 
            console.log("gnocchi alla romana")
            break
        default:
            console.log("No tenemos ese plato")
            break
    }

    let confirmacion = prompt("Desea hacer otra consulta? (si/no)")
    if(confirmacion == "no"){
        continuar=false
        console.log("Gracias!")
    }
}

