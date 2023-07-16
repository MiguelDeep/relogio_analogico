var sec=0
var min=0
var hr=0

var interval

function temp(valor){
    if(valor<10){
        return('0'+valor)
    }else{
        return(valor)
    }
}

function iniciar(){
    tempo()
    interval= setInterval(tempo,10)


}

function pausar(){
    clearInterval(interval)
    document.querySelector("#m").innerHTML+=document.getElementById('tempo').innerHTML+" "
}

function parar(){
    let span=document.createElement('span')
    span.getAttribute('id','mostrar')
    clearInterval(interval)
    sec=0
    min=0
    document.querySelector("#parado").innerHTML+="\n"+document.getElementById('tempo').innerHTML+" ===== "
   
    document.getElementById('tempo').innerText='00:00:00'
}

function tempo(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('tempo').innerText=temp(hr)+':'+temp(min)+':'+temp(sec)
}


function Limpar() {
    document.querySelector("#parado").innerHTML=""  
    document.querySelector("#m").innerHTML=""
}