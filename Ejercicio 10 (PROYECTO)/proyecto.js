function agregarImg() {
  const imagen = "./img/mascota"
  const contenedor = document.getElementById("")
  contenedor.insertAdjacentHTML("beforeend", `<img src=${imagen} alt=${imagen} class="imgBody">`)
}
function eliminarImg() {
  document.location.reload();
}



function agregarImg() {
  while (mascota.length > 0) {
    const imagen = mascota.shift();
    const contenedor = document.getElementById("contenedor");
    contenedor.insertAdjacentHTML("beforeend", `<img src=${imagen} alt=${imagen} class="imgBody">`)
  }
}

function eliminarImagenes() {
  mascota = [];
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = " ";
}

document.getElementById("button").addEventListener("click", agregarImg);
document.getElementById("button2").addEventListener("click", eliminarImg);