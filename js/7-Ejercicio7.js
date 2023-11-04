/*
Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

const numeroIngresado = parseInt(
  prompt("Ingrese un número para saber su tabla de multiplicar")
);

const tablaDeMultiplicar = (numero) => {
  let resultado = undefined;
  for (let i = 1; i <= 10; i++) {
    resultado = numero * i;
    document.write("<tr>");
    document.write(`<td>${numero} x ${i}</td>`);
    document.write(`<td>${resultado}</td>`);
    document.write("</tr>");
  }
};

document.write(`<h2>Tabla de Multiplicar del ${numeroIngresado}</h2>`);

document.write('<table class="m-5">');
document.write(`<thead>
<tr>
    <th>Multiplicación</th>
    <th>Resultado</th>
</tr>
</thead>`);

tablaDeMultiplicar(numeroIngresado);

document.write("</tbody>");
document.write("</table>");
