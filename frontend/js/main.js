let loaded = (eventLoaded) => {
    let myform = document.getElementById("formulario");
  
    myform.addEventListener("submit", (eventSubmit) => {
      debugger;
    });
};

window.addEventListener("DOMContentLoaded", loaded);

constformulario = document.getElementById("formulario");
constformulario.addEventListener("submit", (event) => {
    event.preventDefault();

    nombre = document.getElementById("nombre");
    email = document.getElementById("email");
    intereses = document.getElementById("intereses");

    if (nombre.value.length == 0) {
        Swal.fire({
        title: "Olvidas algo?",
        text: "Debes escribir tu nombre",
        icon: "warning",
        });
        nombre.focus();
        return;
    }

    if (email.value.length == 0) {
        Swal.fire({
        title: "Olvidas algo?",
        text: "Debes escribir tu correo electrónico",
        icon: "warning",
        });
        email.focus();
        return;
    }

    if (intereses.value == "no_selected") {
        Swal.fire({
        title: "Olvidas algo?",
        text: "Debes seleccionar tus intereses",
        icon: "warning",
        });
        intereses.focus();
        return;
    }

    constnombre = document.getElementById("nombre").value;
    constemail = document.getElementById("email").value;
    constintereses = document.getElementById("intereses").value;

    constdatos = {
        nombre: constnombre,
        email: constemail,
        intereses: constintereses,
    };

    Swal.fire({
        title: "Gracias!",
        text: "Tus datos han sido enviados correctamente",
        icon: "success",
    });
    formulario.reset();
});

async function obtenerDatos() {
const conteoProductos = {
    "Comida": 34,
    "Arroz": 23,
    "Pan": 31
};

document.getElementById("tablebody").innerHTML = '';

for (let key in conteoProductos) {
    producto = key;
    conteo = conteoProductos[key];
    let template = `
                <tr>
                <td>${producto}</td>
                <td>${conteo}</td>
                </tr>
    `;
    document.getElementById("tablebody").innerHTML += template;
    
}

}

obtenerDatos();


window.onscroll = function() {scrollFunction()};

window.onscroll = function() {scrollFunction()};
