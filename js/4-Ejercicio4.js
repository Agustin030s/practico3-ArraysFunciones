/*
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

const EsParOImpar = numeroEntero => {
    if(numeroEntero % 2 === 0){
        document.write(`<h2>El número ${numeroEntero} es Par</h2>`);
    }else{
        document.write(`<h2>El número ${numeroEntero} es Impar</h2>`);
    }
}

EsParOImpar(10);