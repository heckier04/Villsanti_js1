alert(" ¡Esto es Zona Fall bienvenido! ");

alert(" ¡El lugar de juegos para todo gamer! ")

alert("a continuacion el mes que elija te asignara el juego que alla salido en ese mes")

let juegos = [
    { mes: "Enero", nombre: "Tekken 8 Deluxe", precio: 100000 },
    { mes: "Febrero", nombre: "Hogwarts Legacy", precio: 80000 },
    { mes: "Marzo", nombre: "It Takes Two", precio: 30000 },
    { mes: "Abril", nombre: "Final Fantasy 7 Remake", precio: 85000 },
    { mes: "Mayo", nombre: "A Plague Tale: Innocence", precio: 52000 },
    { mes: "Junio", nombre: "Hollow Knight", precio: 25000 },
    { mes: "Julio", nombre: "Kingdom Hearts 3", precio: 20000 },
    { mes: "Agosto", nombre: "No Man's Sky", precio: 37000 },
    { mes: "Septiembre", nombre: "Metal Gear Solid V: The Phantom Pain", precio: 56000 },
    { mes: "Octubre", nombre: "La Tierra-Media: Sombras de Mordor", precio: 40000 },
    { mes: "Noviembre", nombre: "Batman: Arkham Collection", precio: 70000 },
    { mes: "Diciembre", nombre: "Assassin's Creed III - Secretos Escondidos", precio: 15000 },
];

function getJuegoPorMes(juegos, mes) {
    return juegos.find((juego) => juego.mes.toLowerCase() === mes.toLowerCase());
}

function calcularCupo(precio) {
    return precio * 0.10;
}

// Función para solicitar un mes válido
function solicitarMes() {
    let mes;
        while (true) {
            mes = prompt("¿En qué mes estás interesado? (Ejemplo: Enero, Febrero, etc.)");
        if (mes && juegos.some(juego => juego.mes.toLowerCase() === mes.toLowerCase())) {
         console.log(`Usuario eligió el mes: ${mes}`);
        break;
    } else {
        alert("Mes no válido, ese mes no es de nuestro planeta.");
    }
    }
    return mes;
}

// Función para confirmar compra
function confirmarCompra(resumen) {
    let confirmacion = prompt(`Resumen de la compra:\n${resumen}\n¿Desea confirmar la compra? Ingrese 's' para sí o 'n' para no`);
    return confirmacion.toLowerCase() === 's';
}

// Interacción con el usuario
let mesUsuario = solicitarMes();
let juegoSeleccionado = getJuegoPorMes(juegos, mesUsuario);

if (juegoSeleccionado) {
    alert(`El juego disponible en ${mesUsuario} es: ${juegoSeleccionado.nombre} - $${juegoSeleccionado.precio}`);
    console.log(`Juego disponible: ${juegoSeleccionado.nombre} - $${juegoSeleccionado.precio}`);

    let deseaComprar = prompt("¿Desea comprar este juego? Ingrese 's' para sí o 'n' para no");

    if (deseaComprar.toLowerCase() === 's') {
        let tieneCupo = prompt("¿Tiene un cupo disponible para usar? Ingrese 's' para sí o 'n' para no");

        let precioOriginal = juegoSeleccionado.precio;
        let precioFinal = precioOriginal;

    if (tieneCupo.toLowerCase() === 's') {
        let deseaUsarCupo = prompt("¿Desea usar el cupo disponible? Ingrese 's' para sí o 'n' para no");

    if (deseaUsarCupo.toLowerCase() === 's') {
        let cupo = calcularCupo(precioOriginal);
        precioFinal = precioOriginal - cupo;
        alert(`El cupo del 10% para el juego ${juegoSeleccionado.nombre} es de $${cupo}`);
        console.log(`Cupo del 10% aplicado: $${cupo}`);
    } else {
        alert(`¡Has decidido no usar el cupo, usted esta loco! El precio total es de $${precioOriginal}`);
        console.log(`No se aplicó cupo. Precio total: $${precioOriginal}`);
    }
    } else {
        alert(`El precio total es de $${precioOriginal}`);
        console.log(`No tiene cupo. Precio total: $${precioOriginal}`);
    }

    let resumenCompra = `Juego: ${juegoSeleccionado.nombre}\nPrecio original: $${precioOriginal}\nPrecio final: $${precioFinal}`;
    
    if (confirmarCompra(resumenCompra)) {
        alert(`¡Gracias por comprar el juego ${juegoSeleccionado.nombre}!`);
            console.log(`Compra confirmada. Juego: ${juegoSeleccionado.nombre}, Precio final: $${precioFinal}`);
    } else {
        alert("¡Compra cancelada! al parecer no le guto el juego.");
        console.log("Compra cancelada por el usuario.");
    }
    } else {
        alert("¡Hasta luego! Esperamos que la proxima tenga mas suerte .");
        console.log("Compra no realizada.");
    }
    } else {
        alert(`No hay juegos disponibles en ${mesUsuario}.`);
        console.log(`No hay juegos disponibles en el mes: ${mesUsuario}`);
}

alert("¡Gracias por visitar zona fall! ¡Hasta luego!");
console.log("Usuario terminó la visita a la tienda.");