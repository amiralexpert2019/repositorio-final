/*variavel fundo recebendo id do player de audio atraves do get element by id*/ 
fundo = document.getElementById("audio");

/** usando a variavel fundo para criar duas funções atraves do event listener, ambas recebem false */
fundo.addEventListener("play", play_evento ,false);
fundo.addEventListener("timeupdate", atualizar, false);

/**função play_evento */
function play_evento(){

    document.getElementById("tempo_atual").innerHTML = secToStr (fundo.currentTime);
    document.getElementById("tempo_total").innerHTML = secToStr (fundo.duration);

    document.getElementById("progresso").max = fundo.duration;
    document.getElementById("progresso").value =fundo.currentTime;

}
/** função atualizar */
function atualizar(){

    document.getElementById("tempo_atual").innerHTML = secToStr (fundo.currentTime);
    document.getElementById("progresso").value = fundo.currentTime;

}

/** função que formata os numeros */
function secToStr( sec_num ) {
    sec_num = Math.floor( sec_num );
    var horas   = Math.floor(sec_num / 3600);
    var minutos = Math.floor((sec_num - (horas * 3600)) / 60);
    var segundos = sec_num - (horas * 3600) - (minutos * 60);
     
    if (horas   < 10)  horas    = "0"+horas;
    if (minutos < 10)  minutos  = "0"+minutos;
    if (segundos < 10) segundos = "0"+segundos;
     
    var tempo    = horas+':'+minutos+':'+segundos;
     
    return tempo;

}