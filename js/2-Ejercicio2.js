/*
Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

-Mostrar la longitud del arreglo.
-Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
-Añade en última posición la ciudad de París.
-Escribe por pantalla el elemento que ocupa la segunda posición.
-Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

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
document.write(`<li>Elemento 2da posición: ${arrayDeCiudades[1]}</li>`);
arrayDeCiudades.splice(1, 0, "Buenos Aires Argentina");
document.write(`<li>Elemento 2da posición: ${arrayDeCiudades[1]} (Se reemplazo Barcelona)</li>`);
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