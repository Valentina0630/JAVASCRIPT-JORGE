//Variables

const caja = document.querySelector("#caja");
const texto = document.querySelector("#texto");

//

caja.addEventListener("click",cambiaColor);

function cambiaColor(){
    caja.classList.toggle("bg-danger");
    caja.classList.toggle("bg-info-subtle");
    texto.classList.toggle("text-info");
    texto.classList.toggle("text-dark");
}