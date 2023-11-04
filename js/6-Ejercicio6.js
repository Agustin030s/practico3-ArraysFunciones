/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/

const primerLadoDelRectangulo = parseFloat(prompt("Ingrese el valor del primer lado del Rectángulo"));
const segundoLadoDelRectangulo = parseFloat(prompt("Ingrese el valor del segundo lado del Rectángulo"));

const calcularPerimetroDelRectangulo = (primerLado, segundoLado) => {
    return 2*(primerLado + segundoLado);
}

const perimetroDelRectangulo = calcularPerimetroDelRectangulo(primerLadoDelRectangulo, segundoLadoDelRectangulo);

document.write(`<h2>El perimetro del Rectángulo es: ${perimetroDelRectangulo}</h2>`);
