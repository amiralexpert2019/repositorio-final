/*variavel fundo recebendo id do player de audio atraves do get element by id*/ 
fundo = document.getElementById("audio");



/** funções que controla o player de abaixo */
function tocar(){
fundo.play();

}

function pausar(){
fundo.pause();

}

function parar(){
fundo.stop();
fundo.currentTime = 0;   
}


function aumentarvolume(){
if(fundo.volume <1 ) fundo.volume +=0.1;    

}

function diminuirvolume(){
    if(fundo.volume >0 ) fundo.volume -=0.1;    
    
    }

function mutar(){
if(fundo.muted){
   fundo.muted=false;
}else{
    fundo.muted=true;
}

}
/** funções que controla o player de audio acima */    