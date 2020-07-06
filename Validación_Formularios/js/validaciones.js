let nombre = document.getElementById("fullName");
let email = document.getElementById("email");
let telefono = document.getElementById("phone");
let contraseña = document.getElementById("password");
let contraseña2 = document.getElementById("rePassword");
let pais = document.querySelector("select.form-control");
let formulario = document.getElementById("formulario");

window.addEventListener('keypress', function(e){
console.log(e);
})

let errores = [];
nombre.addEventListener("blur", function(){
    if(nombre.value == ""){
        console.log(nombre.value);
        errores.push("El campo de nombre debe estar completo.");
        nombre.classList.add("is-invalid");
        document.querySelector('.fullName.invalid-feedback').innerHTML = '<li>El campo de nombre debe estar completo.</li>'
    } else {
        document.querySelector('.fullName.invalid-feedback').innerHTML = ""
        nombre.classList.remove("is-invalid");
        errores = [];
    }
});

email.addEventListener("blur", function(){

    if (email.value == "" || !email.value.includes("@")){
        errores.push("El campo de email debe estar completo");
        document.querySelector('.email.invalid-feedback').innerHTML = '<li>Debe ingresar un mail válido</li>';
        email.classList.add("is-invalid");
        } else {
        document.querySelector('.email.invalid-feedback').innerHTML = ""
        email.classList.remove("is-invalid");
        errores = [];
        }
})

telefono.addEventListener("blur", function(){

    if (telefono.value == "" || isNaN(telefono.value)){
        document.querySelector('.phone.invalid-feedback').innerHTML = '<li> Debe ingresar un teléfono válido </li>';
        telefono.classList.add("is-invalid");
        errores.push("Debe ingresar un teléfono");
        } else{
        document.querySelector('.phone.invalid-feedback').innerHTML = ""
        telefono.classList.remove("is-invalid");
        errores = [];
        }
//Acá falta validar que el campo de teléfono admita solo números.
})

contraseña.addEventListener("blur", function(){

    if (contraseña.value == ""){
        contraseña.classList.add("is-invalid");
        document.querySelector('.password.invalid-feedback').innerHTML = '<li> Debe ingresar una contraseña </li>';
        errores.push("Debe ingresar una contraseña");
        } else if (contraseña.value.length < 4){
        contraseña.classList.add("is-invalid");
        document.querySelector('.password.invalid-feedback').innerHTML = '<li> La contraseña debe tener al menos 4 caracteres </li>';
        errores.push("La contraseña debe tener al menos 4 caracteres");
        } else {
        document.querySelector('.password.invalid-feedback').innerHTML = ""
        contraseña.classList.remove("is-invalid");
        errores = [];
        }

})

contraseña2.addEventListener("blur", function(){

    if(contraseña2.value !== contraseña.value){
        contraseña2.classList.add("is-invalid");
        document.querySelector('.rePassword.invalid-feedback').innerHTML = '<li> Las contraseñas deben coincidir </li>';
        errores.push("Las contraseñas deben coincidir");
        } else {
        document.querySelector('.rePassword.invalid-feedback').innerHTML = ""
        contraseña2.classList.remove("is-invalid");
        errores = [];
        }
})

formulario.addEventListener("submit", function(e){

        if(nombre.value == ""){
            console.log(nombre.value);
            errores.push("El campo de nombre debe estar completo.");
            nombre.classList.add("is-invalid");
            document.querySelector('.fullName.invalid-feedback').innerHTML = '<li>El campo de nombre debe estar completo.</li>'
        }

        if (email.value == ""){
            errores.push("El campo de email debe estar completo");
            document.querySelector('.email.invalid-feedback').innerHTML = '<li>Debe ingresar su email</li>';
            email.classList.add("is-invalid");
            }

        if (telefono.value == ""){
            document.querySelector('.phone.invalid-feedback').innerHTML = '<li> Debe ingresar un teléfono </li>';
            telefono.classList.add("is-invalid");
            errores.push("Debe ingresar un teléfono");
            }

        if (contraseña.value == ""){
            contraseña.classList.add("is-invalid");
            document.querySelector('.password.invalid-feedback').innerHTML = '<li> Debe ingresar una contraseña </li>';
            errores.push("Debe ingresar una contraseña");
            } else if (contraseña.value.length < 4){
            contraseña.classList.add("is-invalid");
            document.querySelector('.password.invalid-feedback').innerHTML = '<li> La contraseña debe tener al menos 4 caracteres </li>';
            errores.push("La contraseña debe tener al menos 4 caracteres");
            }

        if(contraseña2.value !== contraseña.value){
            contraseña2.classList.add("is-invalid");
            document.querySelector('.rePassword.invalid-feedback').innerHTML = '<li> Las contraseñas deben coincidir </li>';
            errores.push("Las contraseñas deben coincidir");
            }

        if (pais.value == ""){
            pais.classList.add("is-invalid");
            document.querySelector(".country.invalid-feedback").innerHTML = '<li> Debe seleccionar su país de nacimiento </li>';
            errores.push("Debe seleccionar su país de nacimiento");
            }

        console.log(errores);

        if (errores.length > 0){
        e.preventDefault();

        } else {
        formulario.style.display = "none";
        document.querySelector('h2').style.display = 'none';
        document.querySelector('body').innerHTML = '<ul>'
        document.querySelector('body').innerHTML += '<li>Nombre: '+ nombre.value + '</li>'
        document.querySelector('body').innerHTML += '<li>Email: '+ email.value + '</li>'
        document.querySelector('body').innerHTML += '<li>Teléfono de contacto : '+ telefono.value + '</li>'
        document.querySelector('body').innerHTML += '<li>País de nacimiento: '+ pais.value + '</li>'
        document.querySelector('body').innerHTML += '</ul>'
        document.querySelector('body').innerHTML +=  'Gracias por registrarte!!'
}

});