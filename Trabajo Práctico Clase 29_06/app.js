//Punto 1
alert("Bienvenidos a mi sitio");
let positivo = confirm("¿Está seguro de que quiere avanzar?")
//Punto 2.1
if (positivo) {

document.querySelector("h2").innerHTML = "Que alegría que quieras continuar con tu visita por este maravilloso sitio."

} else {

document.querySelector("h2").innerHTML = "Lamentamos que no quieras continuar tu visita por este maravilloso sitio."
//Punto 2.2
    location.href = "http://www.losandes.com.ar"

}
//Punto 3
let nombre = prompt("Por favor, ingrese su nombre");
//Punto 4
document.querySelector("h1").innerHTML += " " + nombre

//Punto 5.1
let edad = prompt("¿Cuál es su edad?");

//Punto 5.2
if (edad < 18){
document.querySelector('div.container-general').style = 'display: none';
document.getElementById("accesoDenegado").style.display = "block";
}

//Punto 6
let hobbies = prompt('Ingrese por favor sus hobies separados por una coma');

//Punto 7
let arrayHobbies = hobbies.split(',')

//Punto 8

arrayHobbies.includes()

programar = null
arrayHobbies.forEach((hobbie, i) => {
    if (hobbie == 'programación' || hobbie == "programacion" || hobbie == "programar" || hobbie == "Programar" || hobbie == "Programación" || hobbie == "Programacion") {
        programar = hobbie
    }
  });

  if (programar != null){
    alert("Que bueno que te guste la programación");
    document.querySelector('.background-img').style.backgroundImage = 'url(./img/programmer.jpeg)'
} else {
    alert("Que lástima que no te guste la programación")
//Punto 10
    document.querySelector('.background-img').style.backgroundImage = 'url(./img/gatito.jpeg)'

}

//Punto 9
let listaHobbies = '<ol>'

for (let i = 0; i < arrayHobbies.length && i < 3; i++){

    listaHobbies += "<li>" + arrayHobbies[i] + "</li>"
}
    listaHobbies += '</ol>'

document.querySelector(".hobbies").innerHTML += listaHobbies

//Punto 11

let colorPreferido = prompt('Por favor, ingresa tu color favorito');
let nombreSegundo = prompt('Por favor, ingresa tu nombre');
let nombre2 = "<span>" + nombreSegundo + '</span>';

document.querySelector('h1').innerHTML = 'Bienvenido ' + nombre2

document.querySelector('h1 span').style.color = colorPreferido;

//Punto 12.1

let hobbie = prompt('Ingrese por favor sus hobies separados por una coma');
let arrayHobbies2 = hobbie.split(',')

let listaHobbie = '<ul>';
for (let i = 0; i < arrayHobbies2.length; i++){
    //Punto 12.2
    if (arrayHobbies2[i].length > 5 && arrayHobbies2[i].length < 10){
    listaHobbie += `<li><a href="${prompt(`URL de ${arrayHobbies2[i]}`)}">${arrayHobbies2[i]}</li>`;
    }
}
listaHobbie += '</ul>';
document.querySelector('.hobbies').innerHTML = listaHobbie;

//Punto 12.3
let listas2 = document.querySelectorAll('li');
for (const elem of listas2){
elem.style.textAlign = 'center'
}
//Punto 12.4
let listas = document.querySelectorAll('li a');
for (const elemento of listas){
elemento.style.textDecoration =  'none'
elemento.style.color = colorPreferido
}

//Punto 13
let imagenUsuario = prompt('Por favor, coloca la ruta de tu imagen');

let avatar = document.querySelector("img.avatar");
console.log(avatar);

avatar.src = `img/${imagenUsuario}.jpg`;


//Más ejercicios

let nombrePelicula = prompt("Por favor ingrese el nombre de su película favorita");
let director = prompt("Por favor ingrese el nombre del director de esa película");
let duracion = prompt("Cuánto dura la película?");
let actorPeli = prompt("Qué actor aparece en esta película?");
let linkPeli = prompt("Por favor, agregar la URL de esta película de la web IMDB");

let pelicula = {
nombre: nombrePelicula,
director: director,
duracion: duracion,
actor: actorPeli,
}

let divPeli = document.getElementById("pelicula")

divPeli.style.display = 'block';
divPeli.innerHTML = `<ol> <li><a href="${linkPeli}">${nombrePelicula}</a></li></li>${director}</li><li>${duracion}</li><li>${actorPeli}</li></ol>`

let listadosOrdenados = document.querySelectorAll('ol');
for (const element2 of listadosOrdenados){
element2.style.textAlign = 'center'
}



