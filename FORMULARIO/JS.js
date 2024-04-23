const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const tipoDocumento = document.getElementsByName('doc');
const genero = document.getElementsByName('genero');

const expresiones = {
    Nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    Apellidos: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    Identificacion: /^\d{5,10}$/,
    Edad: /^(1[89]|[2-9]\d)$/,
    Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    Direccion: /^.{10,}$/
}

const campos = {
    Nombre: false,
    Apellidos: false,
    Correo: false,
    Identificacion: false,
    TipoDocumento: false,
    Genero: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "Nombre":
            validarNombre(expresiones[e.target]);
            break;
        case "Apellidos":

            break;
        case "Correo":
        case "Identificacion":
            validarIdentificacion(expresiones[e.target.name], e.target, e.target.name);
            break;
        case "doc":
            validarTipoDocumento();
            break;
        case "genero":
            validarGenero();
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

const validarTipoDocumento = () => {
    const tipoDocumentoSeleccionado = [...tipoDocumento].some(input => input.checked);
    if (tipoDocumentoSeleccionado) {
        document.getElementById('grupo__documento').classList.remove('formulario__grupo-incorrecto');
        document.getElementById('grupo__documento').classList.add('formulario__grupo-correcto');
        document.querySelector('#grupo__documento .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos['TipoDocumento'] = true;
    } else {
        document.getElementById('grupo__documento').classList.add('formulario__grupo-incorrecto');
        document.getElementById('grupo__documento').classList.remove('formulario__grupo-correcto');
        document.querySelector('#grupo__documento .formulario__input-error').classList.add('formulario__input-error-activo');
        campos['TipoDocumento'] = false;
    }
}

const validarGenero = () => {
    const generoSeleccionado = [...genero].some(input => input.checked);
    if (generoSeleccionado) {
        document.getElementById('grupo__genero').classList.remove('formulario__grupo-incorrecto');
        document.getElementById('grupo__genero').classList.add('formulario__grupo-correcto');
        document.querySelector('#grupo__genero .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos['Genero'] = true;
    } else {
        document.getElementById('grupo__genero').classList.add('formulario__grupo-incorrecto');
        document.getElementById('grupo__genero').classList.remove('formulario__grupo-correcto');
        document.querySelector('#grupo__genero .formulario__input-error').classList.add('formulario__input-error-activo');
        campos['Genero'] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if (campos.Nombre && campos.Apellidos && campos.Correo && campos.Identificacion && campos.TipoDocumento && campos.Genero && terminos.checked) {
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});
