/*
Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/

const resultado = [];

//Inicio el array con 0 para cada posible suma
for (let j = 0; j <= 12; j++) {
  resultado[j] = 0;
}

for (let tiradaDeDados = 1; tiradaDeDados <= 50; tiradaDeDados++) {
  const primerDado = Math.floor(Math.random() * 6) + 1;
  const segundoDado = Math.floor(Math.random() * 6) + 1;

  const sumaDados = primerDado + segundoDado;
  console.log(sumaDados);

  resultado[sumaDados]++;
}

document.write('<table class="m-5">');
document.write(`<thead>
<tr>
    <th>Suma<i class="fa-solid fa-dice"></i></th>
    <th>Apariciones</th>
</tr>
</thead>`);

document.write("<tbody>");

for (let i = 2; i <= 12; i++) {
  document.write("<tr>");
  document.write(`<td>${i}</td>`);
  document.write(`<td>${resultado[i]}</td>`);
  document.write("</tr>");
}

document.write("</tbody>");
document.write("</table>");
