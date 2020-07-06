window.addEventListener("load", function(){

let proceso = confirm("Quiere iniciar el proceso?");

if (proceso == false){
alert("Gracias por haber venido");
window.location.href = "https://www.netflix.com/"
} else {
let miembros
    do{
        miembros = prompt("Cuántos integrantes tiene tu familia?")
    } while (isNaN(miembros) || miembros < 3) //Mientras que no sea un número o sea menor a 3.


let familiaGastos = [];
for (let i = 0; i < miembros; i++){
    let unNombre;
    let unGasto;
    do{
        unNombre = prompt('Ingresa el nombre de uno de los miembros');
    } while (unNombre.trim() == "");

    do{
        unGasto = prompt('Ingrese gastos');
    } while (isNaN(unGasto));

    let gastos = {
    nombre: unNombre,
    gastos: unGasto,
    }
console.log(gastos);
familiaGastos.push(gastos);

}
console.log(familiaGastos);
}

})

