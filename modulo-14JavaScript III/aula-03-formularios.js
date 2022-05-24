document.getElementById('formulario-01').addEventListener('submit', function( evento ){
   
    evento.preventDefault();
    evento.stopPropagation();

    if( this.getAttribute('class').match(/erro/)) {
        return false;
    }

    let dados = new FormData(this);

    let notas = [];

    for(let key of dados.keys()) {

        let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0;

        if(!isNaN(numero)) {
            notas.push(numero);
        }

    }

    console.log(notas);

    texto = aprovado(notas)

    document.getElementById('resultado').innerHTML = texto;

});

function validaCampo(elemento){

    elemento.addEventListener('focusoul', function(event){

        event.preventDefault();
    
        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "Verifica o preenchimento de todos os campos em vermelho"; this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    
    });
}


function validaCampoNumerico(elemento){

    elemento.addEventListener('focusoul', function(event){

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value;

        if(numero != "" && numero.match(/[0-9]*/) && this.value >= 0 && this.value <= 10){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }else {
            document.querySelector('.mensagem').innerHTML = "Verifica o preenchimento de todos os campos em destaque"; 
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    
    });
}

let camposobrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');


for( let emFoco of camposobrigatorios) {
    validaCampo(emFoco);
}


for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}
