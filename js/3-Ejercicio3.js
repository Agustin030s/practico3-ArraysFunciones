const resultado = [];

//Inicio el array con 0 para cada posible suma
for (let i = 2; i <= 12; i++) {
    resultado[i] = 0;
}

for(let i = 1; i <= 50; i++){
    const primerDado = Math.floor(Math.random()*6) + 1;
    const segundoDado = Math.floor(Math.random()*6) + 1;

    const sumaDados = primerDado + segundoDado;
    console.log(sumaDados)

    resultado[sumaDados]++;
}

document.write('<table class="m-5">')
document.write(`<thead>
<tr>
    <th>Suma<i class="fa-solid fa-dice"></i></th>
    <th>Apariciones</th>
</tr>
</thead>`)

document.write('<tbody>');

for (let i = 2; i <= 12; i++) {
    document.write('<tr>')
    document.write(`<td>${i}</td>`)
    document.write(`<td>${resultado[i]}</td>`)
    document.write('</tr>')
}

document.write('</tbody>')
document.write('</table>')


