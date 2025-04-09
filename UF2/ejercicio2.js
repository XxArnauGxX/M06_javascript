function mult(...numeros) {
    let resultado = 1;
    for (const numero of numeros) {
        if (!isNaN(numero)) {
            resultado = resultado * numero;
        } else {
            console.log(`El elemento ${numero} no es un número`);
        }
    }
    console.log(resultado);
}

mult(5, 6, 7, 7, 7, 2, 4);
mult(5, 5, 6, 4, 'Hola');