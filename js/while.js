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