let Tempo =  document.querySelector("#tempo");
let TempoReal =  document.querySelector("#cont");

var horAgora;
let relogio;

document.querySelector("#Iniciar").addEventListener("click", function(){
    IniciarContagem();
    
});

function IniciarContagem() {

    if(Tempo.value !== "" && Tempo.value !== "0"){
        const valor = parseInt(Tempo.value);

        if(valor > 0){
            horAgora = valor + 1;

            if (relogio) {
                clearInterval(relogio);
            }

            relogio = setInterval(contador, 1000);

        }else{
            alert("Insira um valor maior que zero");
            Tempo.focus();
        }

    }else{
        alert("Insira um valor valido");
        Tempo.focus();
    }
}
function contador() {
    horAgora--;

    if (horAgora >= 0) {
        let hora, m, s

        hora = Math.floor(horAgora / 3600);
        m  = Math.floor((horAgora - hora * 3600) / 60);
        s = Math.floor(horAgora - hora * 3600 - m * 60);

        if (hora < 10){
            hora = "0"+hora;
        }
        if (m < 10){
            m= "0"+m;
        }
        if (s < 10){
            s = "0"+s;
        }

        TempoReal.innerHTML = `${hora}:${m}:${s}`;

    }else{
        clearInterval(relogio);
        
        document.querySelector(".espaco").innerHTML=`<marquee behavior="" direction="">Fim do Tempo!</marquee>`
        TempoReal.innerHTML = "00:00:00";
    }
}
verificar();
function verificar(){
    Tempo.addEventListener("change", function(){
        if(Tempo.value < 10){
            Tempo.value = "0"+Tempo.value;
        }else{
            Tempo.value = Tempo.value;
        }
    });
}
document.querySelector("#reiniciar").addEventListener("click", () => {
    clearInterval(relogio);
    TempoReal.innerHTML = "00:00:00";
    Tempo.value = "";
    document.querySelector(".espaco").innerHTML=""
});


