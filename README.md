# aula.JavaScript

- Estado do JS (https://2020.stateofjs.com/em-us/technologies/)

- onde é executado
- Omnipresente na web
- app híbridos
- Aplicação de ponta-a-ponta: banco de dados, back-end / front-end
- Interagir com DOM (api-web)
- Requisições dinâmicas
- IoT (Internet das coisas): o JS está presente em tudo 
- ECMAScript

## Fundamentos JS

- Fundamentos do JavScript são essenciais para avançar no desenvolvimento de aplicações modernas, é a base de diversos frameworks
- Nesta curso evoluimos da base para o topo
- É melhor que começar na e precisar retornar a base

## Metodologia

- Medoto progressivo e integrado
- Todo arranha céu apresentamso conceitos de modo progressivo seguindo uma linha de evoluçao
- Começa facil da e vai aumentando a complexidade 
- Além da especialização, aprendemos a interagir com diversas possibilidade

### EXECUTAR O JS
- Console Browsers
- Editores: Subkime, visual code 
- JS Fiddle https://jsfiddle.net/

## Lógica de Programação

- Computador:
----- Máquina de extrair dados
----- processar: realizar operações nos dados de entrada
- Dado: é o que pode ser processado
- Informação: resultrado do processamento 
- processamento de dados: Entrada (dados)> processamento > Saida (informação)

E a lógica?
logica é aquilo que faz sentido 


como escrever um programa?
- Aplicar a 

## OBS;

Para se logar no node.js usamos o comado # node #

## Variáveis
são utilizadas para referenciar espaço na memoria

- var
- const ( fica com o valor imutavel)
- let
- string ( tipo de variavel para conjunto de caracteres)
- tipagem: número ou string
- array ; conjutos de valores

## Operadores
Soma (+)
subtração (-)
Multiplicação (* ou seja x)
dividir  (/)
modulo (de divisão) %
Math: random(), round(), sqrt().

* Atribuição de valor e representado por apenas um sinal de igual (=)
a = b
a += b
a -= b
a *= b
a /= b
a %= b
adiciona 1 **
subtrair 1

* Operadores de comparação / lógicos
Igual -- ou ---
Diferente

## Exercícios

1. Descrever um Algoritimo para resolver o problema da travessia de "Seguro"

Um homem precisa atravessar um rio com um que possui capacidade apenas para carregar ele mesmo e mais um de seus três perteces, que são: um lobo, uma cabra e um maço de alfafa. Em cada viagem só poderá ir o homem e apenas um dos seus pertences. A seguinte regra deverá ser respeitada: o lobo não pode ficar sozinho com a cabra e nem a cabra sozinho com o maço de alfafa. Escreva um algoritimo para fazer a travessia dos pertences que estão em uma margem do rio para a outra 

2. JS: Exibir média de 3 numeros com entradas pelo formulario html 

apois isso enviar os links pelo Git ou do fiddle



# Operadores

## Aritméticos retornam o resultado de uma operação

+ somar
- subtrair
* multiplicar
/ dividir 
%"resto de divisão

## comparadores matemáticos: teste lógico, retorno booleano (true / false);
<   menor que
>   maior que
<=  menor ou igual
>=  maior ou igual

## comparadores Lógicos: teste lógico, retorno booleano (true / false)

==      igualdade entre sentenças (valor)
!=      diferença entre sentenças  (valor)
===     igualdade entre sentenças (valor e tipo)
!==     diferenças entre sentenças (valor e tipo)

a == b = true

a != b = false


## Operadores de lógica e junção lógica

!     NÃO (NOT)
&&    E (AND)
|| OU (OR)

O sinal de exlamação (!) é o operador NOT (não), utilizado para negar a sentença que vem na sequência.
## exemplos:

a != b         // o valor de a é diferente de b
x !== y       //  o valor e o tipo de x são diferente de y
!a == b       //  o valor de a não é igual ao valor de b

### As condições lógicas são convertidas em numero binários 
true é equivalente a 1
false é equivalente a 0

### Operador lógico de atribuição 

tem a capacidade de atribuir valor a uma variavel a partir de uma condição lógica, economiza IFs 

Exemplo: var meucarro = cor == "preto" ? "preto" : "branco";
         let meuCarro = cor == "branco" ? "branco" : "vermelho";
         resuldado da cor do carro vermelho

## If

if (...) {
}

## Exemplo: > 
if (cor =="azul"){
... meuCarro = "preto";
... console.log (meuCarro);
... }
# R: preto



## Else : serve para dar alternativa

else {

}
## 1. Exemplo

if (cor == "preto") {
    meuCarro = "preto";
} else {
    meuCarro = "azul";
}

## 2. Exemplo
if (cor == "preto") {
    meuCarro = "preto";
} else if (cor == "vermelho"){
    meuCarro = "azul";
}else if (cor == "verde"){
    meuCarro = "branco";
}else {
    meuCarro = "rosa";
}

## Switch

switch (cor) {
    case 'branco' :
        meuCarro = 'branco';
        break;
    case 'vermelho' :
        meuCarro = 'vermelho';
        break;
    case 'amarelo' :
        meuCarro = 'amarelo';
        break;
    default :
        console.log('não temos a cor dejada');
}

## media

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

## laços de Repetição (loops)

for ([expressaoInicial]; [condicao]; [incremento])

while([condicao]){
    [execucao]
}
var contador = 0;
while(contador < 10) {
    contador++

}

var hora = 24;
while (hora > 0){
    hora--;

    console.log(hora);
}

ou 

var hora = 24;
while (hora > 0){
    hora--;
    
   console.log(hora);
   hora--;
   
}
 console.log("total de horas: " + hora);

 do {
     [execucao]
 } while ([condição])


//fazer a revisão de carro aos 10 km

var km;
var revisão = 3;

for(km = 0; km < revisão; km++){
    console.log("apenas" + "km + então pode rodar);
}

## Cálculo de média de alunos

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
