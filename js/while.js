let datosEntrada = prompt("Ingrese datos(Si ingresas ESC termina)");

// El while compara que datasEntrada sea siempre distinto de ESC para volverse a repetir
while( datosEntrada != "ESC"){
    console.log("El usuaario ingreso " + datosEntrada);
    datosEntrada = prompt("Ingrese datos(Si ingresas ESC termina)"); 
}