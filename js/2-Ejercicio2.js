const arrayDeCiudades = [];

do{
    const nombreCiudad = prompt("Ingrese el nombre de una ciudad");

    if(nombreCiudad === null){
        break;
    }

    arrayDeCiudades.push(nombreCiudad);

}while(confirm("Desea ingresar otra ciudad?"))

document.write(`<p>El arreglo contiene ${arrayDeCiudades.length} elementos</p>`);

document.write('<ul>');
document.write(`<li>Elemento 1er posición: ${arrayDeCiudades[0]}</li>`);
document.write(`<li>Elemento 3er posición: ${arrayDeCiudades[2]}</li>`);
document.write(`<li>Elemento ultima posición: ${arrayDeCiudades[arrayDeCiudades.length-1]}</li>`);
arrayDeCiudades.push('Paris, Francia');
document.write(`<li>Elemento ultima posición: ${arrayDeCiudades[arrayDeCiudades.length-1]}</li>`);
document.write('</ul>');

document.write('<h2>Arreglo de Ciudades</h2>')
document.write('<ul>');
for(let i = 0; i < arrayDeCiudades.length; i++){
    document.write(`<li>${arrayDeCiudades[i]}</li>`);
}
document.write('</ul>');