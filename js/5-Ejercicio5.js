/*
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

const informacionSobreCadena = cadenaIngresada =>{
    if(cadenaIngresada === cadenaIngresada.toUpperCase()){
        document.write(`<h2>${cadenaIngresada} (solo contiene letras Mayúsculas)</h2>`);
    }else if(cadenaIngresada === cadenaIngresada.toLowerCase()){
        document.write(`<h2>${cadenaIngresada} (solo contiene letras Minúsculas)</h2>`);
    }else{
        document.write(`<h2>${cadenaIngresada} (contiene letras Mayúsculas y Minúsculas)</h2>`);
    }
}

informacionSobreCadena('CADENA TODO EN MAYUSCULAS');
informacionSobreCadena('cadena de prueba toda en minusculas');
informacionSobreCadena('Cadena de Prueba con letras Mayúsculas y Minúsculas');