const formulario = document.querySelector("#formulario")
const tituloFormulario = document.querySelector("#titulo-formulario")
const task = document.querySelector(".tareas")
const no_hay_tareas = document.querySelector("#no-hay-tareas")
let tareas = []

formulario.addEventListener("submit", validarFormulario)
task.addEventListener("Click", eliminarTarea)
task.addEventListener("Click", tareaCompletada)

function validarFormulario(e){
    e.preventDefault()

    const tarea = document.querySelector("#tarea").value
    if(!tarea.trim()){
        tituloFormulario.textContent = "Formulario"
        setTimeout(() =>{
            tituloFormulario.textContent = "Formulario"
        }, 2000)
        return
    }

    const objTarea ={
        id: Date.now(),
        tarea: tarea,
        estado: false
    }
    tareas = [...tareas, objTarea]
    formulario.reset()
    mostrarHtml()
}
