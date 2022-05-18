function calcularMedia(notas) {

    var soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;
    

}

console.log("Média:" + calcularMedia([8, 8, 10]))

console.log("Média:" + calcularMedia([6, 8, 10]))

console.log("Média:" + calcularMedia([8, 5, 9]))