var fs=require('fs');

function leer(error, datos) {
    if (error) 
        console.log(error);
    else
        console.log(datos.toString());
}

fs.readFile('./archivo1.txt', leer);

console.log('Ultima linea del programa');