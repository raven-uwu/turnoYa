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

if (document.getElementById("resumenHoy") !== null) {
  mostrarResumenInicio();
}
