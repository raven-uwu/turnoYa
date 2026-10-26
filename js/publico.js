// Pantallas publicas: inicio, servicios, registro e inicio de sesion.

function mostrarResumenInicio() {
  let abiertos = 0;
  let enFila = 0;
  for (let i = 0; i < servicios.length; i++) {
    if (servicios[i].activo) {
      abiertos++;
      enFila += personasEnEspera(servicios[i].id);
    }
  }
  document.getElementById("resumenHoy").innerHTML = "Hoy hay <strong>" + abiertos + "</strong> servicios disponibles y <strong>" +
    enFila + "</strong> personas esperando su turno.";
}

function mostrarServicios() {
  let html = "";
  for (let i = 0; i < servicios.length; i++) {
    let servicio = servicios[i];
    if (servicio.activo) {
      let enFila = personasEnEspera(servicio.id);
      html += '<div class="col-sm-6 mb-3">' +
        '<article class="card tarjeta">' +
        '<div class="card-body">' +
        '<h2 class="card-title titulo-tarjeta">' + servicio.nombre + "</h2>" +
        '<p class="card-text texto-suave">' + servicio.descripcion + "</p>" +
        '<ul class="datos-servicio">' +
        "<li>Tiempo promedio <strong>" + servicio.tiempoPromedio + " min</strong></li>" +
        "<li>Personas en espera <strong>" + enFila + "</strong></li>" +
        "<li>Espera aproximada <strong>" + enFila * servicio.tiempoPromedio + " min</strong></li>" +
        '<li><span>Horario<span class="horario">' + horarioTexto(servicio.id) + "</span></span></li>" +
        "</ul>" +
        '<a class="btn btn-turnoya" href="login.php">Pedir turno</a>' +
        "</div>" +
        "</article>" +
        "</div>";
    }
  }
  document.getElementById("listaServicios").innerHTML = html;
}

function validarRegistro(evento) {
  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let telefono = document.getElementById("telefono").value.replace("-", "");
  let contrasena = document.getElementById("contrasena").value;
  let confirmar = document.getElementById("confirmar").value;
  let errores = "";

  if (nombre.length < 3) {
    errores += "<li>Escriba su nombre completo.</li>";
  }
  if (buscarUsuarioPorCorreo(correo) !== null) {
    errores += "<li>Ya existe una cuenta con ese correo.</li>";
  }
  if (telefono.length !== 8 || isNaN(Number(telefono))) {
    errores += "<li>El telefono debe tener 8 numeros, por ejemplo 8888-8888.</li>";
  }
  if (contrasena.length < 8) {
    errores += "<li>La contrasena debe tener al menos 8 caracteres.</li>";
  }
  if (contrasena !== confirmar) {
    errores += "<li>Las contrasenas no coinciden.</li>";
  }
  if (!document.getElementById("terminos").checked) {
    errores += "<li>Debe aceptar las condiciones de uso.</li>";
  }

  if (errores !== "") {
    evento.preventDefault();
    document.getElementById("mensaje").innerHTML = alerta("danger", "<strong>Revise lo siguiente:</strong><ul>" + errores + "</ul>");
  }
}

if (document.getElementById("resumenHoy") !== null) {
  mostrarResumenInicio();
}

if (document.getElementById("listaServicios") !== null) {
  mostrarServicios();
}

if (document.getElementById("formRegistro") !== null) {
  document.getElementById("formRegistro").addEventListener("submit", validarRegistro);
}
