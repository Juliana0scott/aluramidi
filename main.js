function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');
}
document.querySelectorAll('.tecla')

const listadeteclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < 9){
    listadeteclas[contador].onclick = function(){
        tocaSom('#som_tecla_clap')

    };
    contador = contador + 1;
}

