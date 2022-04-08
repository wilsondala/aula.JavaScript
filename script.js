
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



