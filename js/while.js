let datosEntrada = prompt("Ingrese datos(Si ingresas ESC termina)");

// El while compara que datasEntrada sea siempre distinto de ESC para volverse a repetir
while( datosEntrada != "ESC"){
    console.log("El usuaario ingreso " + datosEntrada);
    datosEntrada = prompt("Ingrese datos(Si ingresas ESC termina)"); 
}


let numero = 0;

do {
    numero = prompt("Ingrese numero");
    console.log(numero);
} while (parseInt(numero));


/// USando switch

let datosParaSwitch = prompt("Ingrese datos(Si ingresas ESC termina)");

while( datosParaSwitch != "ESC"){

    switch (datosParaSwitch) {
        case "Nintendo":
            console.log("Hola Nintendo switch")
            break;
        case "Play":
            console.log("Hola Playstation ")
            break;
        default:
            console.log("No se quien sos y no se permiten XBox");
            break;
    }
    datosParaSwitch = prompt("Ingrese datos(Si ingresas ESC termina)");
}