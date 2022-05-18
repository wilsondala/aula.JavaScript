// aprendendo a calcular media de aluno para centenas como fazer para simplificar ? segue a programação abaixo para isso usaremos os laços de repetição 

// usando Laços de Repetição
// estrutura do laços de repetição
// 1- for ([expressaoInicial]; [condicao]; [incremento])

//sitematizando a revisão de um carro aos 3km ou 10 km 


var km;
var revisao = 3;
for(km = 0; km <= revisao; km++){
    console.log("apenas" + km + "kms então pode rodar");
}

// calculando medio de varias pessoas segue algoritimo abaixo

var alunos = [ 
[6, 7, 8, 6],
[8, 5, 6, 8],
[10, 6, 8, 7],
[10, 7, 6, 9,],
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
