
// Voy a contar del 0 al 9
for (let index = 0; index < 10; index++) {
    console.log("Estamos contando el numero es: " + index);
    
}

// index++ es equivalente a index = index + 1

for (let index = 0; index < 10; index=index+2) {
    console.log("Estamos contando el numero es: " + index);   
}

let myContador = parseInt(prompt("Contar hasta cuanto?"));
for (let index = 0; index <= myContador; index++) {
    let unaVariable = "hola" // Esto vive dentro del loop
    console.log("Estamos contando el numero es: " + index);
}

// Esto es valido pero es un bucle infinito... te rompe todo
//for(;  ; ){

// no tiene condicion hasta 
for (let index = 0; ; index++) {
    console.log("Estamos contando el numero es: " + index);
    if (index > 10 ) {
        break;
    }
}