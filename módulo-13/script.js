
function calcularMedia(notas) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;
    

}

let media; // escopo global

function aprovado( notas ) {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media +' - Resultado: ' + condicao;
}

// Função Recursivas

function contagemRegressiva(numero){
    console.log(numero);

    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);
}


//contagemRegressiva(50);

document.addEventListener('submit', function( evento ){
   
    evento.preventDefault();
    evento.stopImmediatePropagation();

    let formulario = document.getElementById('formulario-01');

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = [];

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);

        // adicionar itens no array . obs: estudar sobre array
        notas.push( parseInt(dados.get(key)));

    }

    console.log(notas);

    console.log(objeto);

    texto = aprovado(notas)

    document.getElementById('resultado').innerHTML = texto;

});

// console.log("Média:" + calcularMedia([8, 8, 10]))

// console.log("Média:" + calcularMedia([6, 8, 10]))

// console.log("Média:" + calcularMedia([8, 5, 9]))