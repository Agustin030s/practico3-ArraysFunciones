const arrayDeCiudades = [];

do{
    const nombreCiudad = prompt("Ingrese el nombre de una ciudad");

    if(nombreCiudad === null){
        break;
    }

    arrayDeCiudades.push(nombreCiudad);

}while(confirm("Desea ingresar otra ciudad?"))

document.write(arrayDeCiudades);