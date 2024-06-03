// const jugador1 = "messi"
// const jugador2 = "dibu martinez"
// const jugador3 = " di maria"

// const seleccion = ["messi", "dibu martinez", "di maria", "lautaro martinez", "julian alvarez"]

// console.log(seleccion.length)
// console.log(seleccion)
// console.log(seleccion[1])


//.push() --> añade un elemento al final del array
// seleccion.push("dybala")

//.unshift() --> añade un elemento al inicio del array
// seleccion.unshift("paredes")

//.pop --> quita el ultimo elemento
// seleccion.pop()

//.shift --> quita el primer elemento
// seleccion.shift()

//.indexof --> busca un elemento en el array y arroja su indice
// console.log(seleccion.indexOf("paredes"))

//.includes() --> busca un elemento y devuelve true/false
// console.log(seleccion.includes("dybala"))

//.join() --> se genera un string separando los elementos
// console.log(seleccion.join(" / "))

//.sort() --> ordena alfabeticamente el array
// seleccion.sort()

//.reverse() --> invierte el orden del array
// seleccion.reverse()
// seleccion.sort().reverse()

//.splice() --> permite borrar un elemento

// seleccion.splice(2,0,"dybala")


// console.log(seleccion)


// const mate = {
//     color: "azul",
//     material: "madera",
//     size: "mediano",
//     edad: 1
// }

// console.log(mate)


const jugador1 = {
    jugador: "messi",
    posicion: "delantero"
}
const jugador2 = {
    jugador: "dibu martinez",
    posicion: "arquero"
}
const jugador3 = {
    jugador: "di maria",
    posicion: "volante"
}
const jugador4 = {
    jugador: "lautaro martinez",
    posicion: "delantero"
}
const jugador5 = {
    jugador: "julian alvarez",
    posicion: "delantero"
}

const convocados= [jugador1, jugador2, jugador3, jugador4, jugador5]

console.log(convocados)

for (const convocado of convocados) {
    console.log(convocado.jugador)
}


const addElement = () => {
    let jugador = prompt("Jugador a convocar")
    let posicion = prompt("Posicion del jugador a convocar")

    const convocado = {
        jugador: jugador,
        posicion: posicion
    }

    convocados.push(convocado)
}

addElement()

console.log(convocados)
