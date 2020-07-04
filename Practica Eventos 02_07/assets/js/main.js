//Punto 2
//window.addEventListener("load", function(){
//Punto 3
let btnAbracadabra = document.getElementById("abracadabra");
btnAbracadabra.addEventListener ("click", function(){
let nombre = prompt("Por favor, ingresa tu nombre");
document.querySelector("h1").innerHTML = "Hi, I'm <strong>" + nombre + '</strong>'
})
//Punto 4
/*let btnTouch = document.getElementById("btnTouch");
btnTouch.addEventListener("dblclick", function(){
document.getElementById("parrafoColor").style.color = "red";
})*/

//Punto 4 otra opción con GetElementByClassName.

/*let btnTouch = document.getElementById("btnTouch");
btnTouch.addEventListener("dblclick", function(){
let parrafoColor = document.getElementsByClassName("parrafo-color");
parrafoColor[0].style.color = "red";
});*/

//Punto 5

function ramdomColor() {
    var color = { 1: 'red', 2: 'blue', 3: 'green', 4: "yellow" };

    function randomInt(min, max) {
        return min + Math.floor((max - min) * Math.random());
    }
    let ramdom = randomInt(1, 5);
    return color[ramdom];
}

//Punto 6

let btnTouch = document.getElementById("btnTouch");
btnTouch.addEventListener("dblclick", function(){
let parrafoColor = document.getElementsByClassName("parrafo-color");
parrafoColor[0].style.color = ramdomColor();
});

//Punto 7
const boxesWork = document.querySelectorAll("section.box.style1");
    boxesWork.forEach(box => {
        box.addEventListener("click", () => {
            let boxTitle = box.querySelector("h3").innerHTML;
            alert(`Clickeaste sobre ${boxTitle}`);
        });
    });

//Punto 1
let btnWork = document.getElementById('btnWork');
let parrafoWork = document.getElementById('parrafoWork');
btnWork.addEventListener('mouseover', function(){
    parrafoWork.style.color = ramdomColor();
})

btnWork.addEventListener('mouseout', function(){
    parrafoWork.style.color = '#888';
})

//Punto 2
let lechuza = document.getElementById('lechuza');
lechuza.addEventListener('click', function(){
    alert('Preparate para el futuro...')
    setTimeout(function(){alert('...y el futuro ya llego!!!'); }, 5000);
});

//Punto 3

/*window.addEventListener("keypress", function(){
    alert("Ey, tocaste el teclado!");
})*/

//Punto 4

/*window.addEventListener("keypress", function(event){
    console.log(event);
    if (event.code == "Space") {
    alert("Ey, tocaste la barra!");
    }
})*/

//Punto 5

let email = document.getElementById("email");

email.addEventListener("focus", function(event){
    window.addEventListener("keypress", function(event){
        if (event.code == "Space") {
        alert("Ey, tocaste la barra!");
        event.preventDefault();
        }
    })
})

//Punto 6

let estadoSecreto = 0;
    window.addEventListener("keypress", (e) => {
        console.log(e);
        if (e.key == "s") {
            estadoSecreto = 1;
        }
        if (e.key == "e" && estadoSecreto == 1) {
            estadoSecreto = 2;
        }
        if (e.key == "c" && estadoSecreto == 2) {
            estadoSecreto = 3;
        }
        if (e.key == "r" && estadoSecreto == 3) {
            estadoSecreto = 4;
        }
        if (e.key == "e" && estadoSecreto == 4) {
            estadoSecreto = 5;
        }
        if (e.key == "t" && estadoSecreto == 5) {
            estadoSecreto = 6;
        }
        if (e.key == "o" && estadoSecreto == 6) {
            estadoSecreto = 0;
            alert("SECRETO MAGICO");
        }
    });

//})

//Extra extra

function numeroGanador(min, max) {
	return min + Math.floor((max - min) * Math.random());
}

let ganador = numeroGanador(1,7);
console.log(ganador);

let cajas = document.querySelectorAll(".style2");
for (let i=0; i<cajas.length; i++){
    cajas[i].addEventListener('click', function(){
        console.log(this.querySelector("h3"))
        if (this.querySelector("h3").innerHTML == ganador){
            alert('GANASTE!!!!!')
        } else {
            alert('Seguí participando');
        }
        })
}

