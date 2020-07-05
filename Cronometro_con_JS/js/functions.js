let btnStart = document.getElementById("btnStart");
let btnPause = document.getElementById("btnPause");
let btnReset = document.getElementById("btnReset");
let seconds = document.querySelector(".seconds");
let minutes = document.querySelector(".minutes");


btnStart.addEventListener("click", function(){
//Comienza el tiempo a contar desde 0.
    this.setAttribute("disabled", "");
    btnReset.setAttribute("disabled", "");
    btnPause.removeAttribute("disabled");
    segundos = seconds.innerHTML;
    minutos = minutes.innerHTML;

    let startInterval = setInterval(function(){
    if(seconds.innerHTML>58){
        minutos++
        if (minutes.innerHTML<9){
        minutes.innerHTML = `0${minutos}`;
        }else{
        minutes.innerHTML = `${minutos}`;
        }
        seconds.innerHTML = '00';
        segundos = -1;
        }
        segundos++;
    if(seconds.innerHTML<9){
        seconds.innerHTML = `0${segundos}`;
    } else{
        seconds.innerHTML = `${segundos}`;
    }
    }, 1000);

    btnPause.addEventListener("click", function(){
        clearInterval(startInterval);
        btnReset.removeAttribute("disabled");
        btnStart.removeAttribute("disabled");
        })

    btnReset.addEventListener("click", function(){
        clearInterval(startInterval);
        segundos = 0;
        minutos = 0;
        minutes.innerHTML = `0${minutos}`;
        seconds.innerHTML = `0${segundos}`;
        btnStart.removeAttribute("disabled");
        })

});


