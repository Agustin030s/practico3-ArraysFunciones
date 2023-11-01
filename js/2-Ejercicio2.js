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
document.write(`<li>Elemento ultima posición: ${arrayDeCiudades.length-1}</li>`);
document.write('</ul>');

document.write(arrayDeCiudades);