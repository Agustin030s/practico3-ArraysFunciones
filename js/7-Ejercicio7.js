/*
Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

const numeroIngresado = parseInt(prompt("Ingrese un número para saber su tabla de multiplicar"));

const tablaDeMultiplicar = numero =>{
    let resultado = undefined;
    for(let i = 1; i <= 10; i++){
        resultado = numero*i;
        console.log(resultado);
    }
}

tablaDeMultiplicar(numeroIngresado);