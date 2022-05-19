console.log("Operacoes Aritimetricas");

console.log(2+2);

// essa segunda opcao ela nao fazer nos trazar o calculo que pretedemos, o calculo será 8*2+10 porque não colocamos o valor da soma dentro de parentes no js ele prioriza sempre as multiplicação o correto é console.log((10+8)*2);
console.log(10+8*2);
console.log((10+8)*2);

// se fizermos de jeito no console ele vai juntar as nossas variaveis exemplo abaixo o resultado será  console.log= ano2022 no primeiro exemplo e no segundo será 22 porque desse jeito o console entende como texto por estarem dentro de aspas.
console.log("ano"+ 2022)
console.log("2"+"2");

var a = 10; 
var b = 15;
var c = 20;

a != b

console.log(a + b + c);

const meuCarro = "preto" ? "branco" : "branco";


console.log(meuCarro);

// sistematizando a escolha de cor do carro
switch (cor) {
    case 'branco':
        meuCarro = 'branco';
        break;
    case 'vermelho':
        meuCarro = 'vermelho';
        break;
    case 'amarelo':
        meuCarro = 'azul';
        break;
    default :
    console.log('não temos a cor desejada');
    
}
// projeto para calcular media de nota do aluno para sabermos se esta aprovado ou não
var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if(media >= 8 ) {
    console.log("Aluno aprovado")
} else {
    console.log("Aluno em recuperação")
}
