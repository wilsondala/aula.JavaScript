
/*function obterMedia(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);

    var media = (a + b + c) / 3;

    document.getElementById("resultado").innerHTML = "Resultado:" + media;

}*/



var alunos = [
    [6, 7, 8, 6],
[8, 5, 6, 8],
[10, 6, 8, 7],
[10, 7, 6, 9, 6],
[9, 6, 6, 6,]
]
var nota = 0;
for (var i = 0; i < alunos.length; i++){

nota = 0
notasAluno = alunos[i]
console.log("Aluno: " + parseInt(i+1));
console.log("Notas: " + notasAluno);

for( c = 0; c < notasAluno.length; c++){
nota += notasAluno[c];
}

media = nota / 4;

if(media >= 7) {
    resultado = "Aprovado";
} else {
    resultado = "reprovado";
}

console.log("Media: " + media + " - " + resultado);
}


/*SEGUINDO COM A AULA DE JAVASCRIPT AULA SOBRE FUNÇÃO*/

/*funcão Calculador buscar a media do aluno*/
function calcularMedia( notas ) {

    var soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;
    
    /*funcão para sabermos se o aluno aprovou*/   
    
}

let media // escopo global

/*function aprovacao( media ) { */

function aprovacao( notas ) {
		
    let media = calcularMedia( notas );

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    /*return condicao;*/
    
    return 'Média' + media + ' - Resultado: ' + condicao;
}

console.log( aprovacao([8, 8, 5]));

console.log( aprovacao([8, 8, 10]));
/*console.log para calcular Media da nota do aluno*/
//console.log( "Média:" + calcularMedia([8, 8, 5]))
/*console.log para saber se o aluno aprovou ou reprovou */
//console.log( aprovacao( calcularMedia([8, 8, 5])))


/*console.log( "Média:" + calcularMedia([8, 8, 6, 6, 3]))
/*console.log para saber se o aluno aprovou ou reprovou */
/*console.log( aprovacao( calcularMedia([8, 8, 4, 6, 3])))

console.log( "Média:" + calcularMedia([8, 5, 4]))
/*console.log para saber se o aluno aprovou ou reprovou */
//console.log( aprovacao( calcularMedia([8, 8, 10, 6, 3])))
