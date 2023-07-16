const horas=document.querySelector("#horas");
const minutos=document.querySelector("#minutos");
const segundos=document.querySelector("#segundos");

function tempo (){
    const tempo=new Date();
  /* 360peguei tamanho do circulo /12 que é o numero de horas multiplicando pela hora actual  */
    const Horas=(360/12)* tempo.getHours();
    const Minutos=(360/60)*tempo.getMinutes();
    const Segundos=(360/60)*tempo.getSeconds();
    horas.style.transform=`rotate(${Horas}deg)`
    minutos.style.transform=`rotate(${Minutos}deg)`
    segundos.style.transform=`rotate(${Segundos}deg)`
}

setInterval(() => {
    tempo();
}, 1000);