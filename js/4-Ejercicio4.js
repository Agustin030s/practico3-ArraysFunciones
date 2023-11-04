const EsParOImpar = numeroEntero => {
    if(numeroEntero % 2 === 0){
        document.write(`<h2>El número ${numeroEntero} es Par</h2>`);
    }else{
        document.write(`<h2>El número ${numeroEntero} es Impar</h2>`);
    }
}

EsParOImpar(10);