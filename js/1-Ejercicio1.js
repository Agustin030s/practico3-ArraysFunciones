const meses = ['Enero', 'Febrero', 'Marzo','Abril', 'Mayo', 'Junio', 
'Julio', 'Agosto', 'Septiemnbre', 'Octubre', 'Noviembre', 'Diciembre'];

document.write('<h2>Listado de Meses</h2>')
document.write('<ul>')
for(let i = 0; i < meses.length; i++){
    document.write(`<li>${meses[i]}</li>`);
}
document.write('</ul>')