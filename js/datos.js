// Datos de ejemplo mientras el sistema no tiene base de datos.
// Los cambios que se hacen en pantalla se pierden al recargar la pagina.

const fechaHoy = "2026-10-26";
const horaActual = "09:10";
const usuarioActual = 2;

const estados = ["Pendiente", "En espera", "En atencion", "Finalizado", "Cancelado"];

const servicios = [
  { id: 1, nombre: "Cajas", descripcion: "Pagos, depositos y retiros.", prefijo: "C", tiempoPromedio: 5, activo: true },
  { id: 2, nombre: "Atencion al cliente", descripcion: "Consultas, reclamos y actualizacion de datos.", prefijo: "A", tiempoPromedio: 10, activo: true },
  { id: 3, nombre: "Tramites y documentos", descripcion: "Constancias, certificaciones y entrega de documentos.", prefijo: "T", tiempoPromedio: 8, activo: true },
  { id: 4, nombre: "Asesoria personalizada", descripcion: "Orientacion sobre productos y servicios.", prefijo: "P", tiempoPromedio: 20, activo: true },
  { id: 5, nombre: "Soporte tecnico", descripcion: "Ayuda con la plataforma en linea.", prefijo: "S", tiempoPromedio: 15, activo: false }
];

const horarios = [
  { id: 1, idServicio: 1, dia: "Lunes a viernes", apertura: "08:00", cierre: "17:00" },
  { id: 2, idServicio: 1, dia: "Sabado", apertura: "08:00", cierre: "12:00" },
  { id: 3, idServicio: 2, dia: "Lunes a viernes", apertura: "08:00", cierre: "16:00" },
  { id: 4, idServicio: 3, dia: "Lunes a viernes", apertura: "09:00", cierre: "15:00" },
  { id: 5, idServicio: 4, dia: "Lunes a viernes", apertura: "09:00", cierre: "16:00" },
  { id: 6, idServicio: 5, dia: "Lunes a viernes", apertura: "10:00", cierre: "14:00" }
];

const usuarios = [
  { id: 1, nombre: "Laura Jimenez", correo: "admin@ejemplo.com", telefono: "8888-1000", rol: "Administrador", activo: true },
  { id: 2, nombre: "Ana Rodriguez", correo: "ana@ejemplo.com", telefono: "8888-2001", rol: "Cliente", activo: true },
  { id: 3, nombre: "Carlos Mora", correo: "carlos@ejemplo.com", telefono: "8888-2002", rol: "Cliente", activo: true },
  { id: 4, nombre: "Sofia Vargas", correo: "sofia@ejemplo.com", telefono: "8888-2003", rol: "Cliente", activo: true },
  { id: 5, nombre: "Diego Solis", correo: "diego@ejemplo.com", telefono: "8888-2004", rol: "Cliente", activo: true },
  { id: 6, nombre: "Valeria Castro", correo: "valeria@ejemplo.com", telefono: "8888-2005", rol: "Cliente", activo: false },
  { id: 7, nombre: "Andres Quesada", correo: "andres@ejemplo.com", telefono: "8888-2006", rol: "Cliente", activo: true }
];

const turnos = [
  { id: 1, numero: "C-010", idUsuario: 3, idServicio: 1, estado: "Finalizado", fecha: "2026-10-26", hora: "08:05" },
  { id: 2, numero: "A-005", idUsuario: 4, idServicio: 2, estado: "Finalizado", fecha: "2026-10-26", hora: "08:12" },
  { id: 3, numero: "T-002", idUsuario: 5, idServicio: 3, estado: "Finalizado", fecha: "2026-10-26", hora: "08:15" },
  { id: 4, numero: "C-011", idUsuario: 5, idServicio: 1, estado: "Cancelado", fecha: "2026-10-26", hora: "08:20" },
  { id: 5, numero: "P-001", idUsuario: 7, idServicio: 4, estado: "Finalizado", fecha: "2026-10-26", hora: "08:30" },
  { id: 6, numero: "C-012", idUsuario: 7, idServicio: 1, estado: "En atencion", fecha: "2026-10-26", hora: "08:31" },
  { id: 7, numero: "A-006", idUsuario: 3, idServicio: 2, estado: "En atencion", fecha: "2026-10-26", hora: "08:40" },
  { id: 8, numero: "C-013", idUsuario: 4, idServicio: 1, estado: "En espera", fecha: "2026-10-26", hora: "08:44" },
  { id: 9, numero: "C-014", idUsuario: 5, idServicio: 1, estado: "En espera", fecha: "2026-10-26", hora: "08:50" },
  { id: 10, numero: "C-015", idUsuario: 2, idServicio: 1, estado: "En espera", fecha: "2026-10-26", hora: "08:52" },
  { id: 11, numero: "T-003", idUsuario: 4, idServicio: 3, estado: "En espera", fecha: "2026-10-26", hora: "08:55" },
  { id: 12, numero: "A-007", idUsuario: 7, idServicio: 2, estado: "En espera", fecha: "2026-10-26", hora: "09:01" },
  { id: 13, numero: "C-016", idUsuario: 3, idServicio: 1, estado: "Pendiente", fecha: "2026-10-26", hora: "09:03" },
  { id: 14, numero: "C-001", idUsuario: 3, idServicio: 1, estado: "Finalizado", fecha: "2026-10-25", hora: "08:10" },
  { id: 15, numero: "C-002", idUsuario: 4, idServicio: 1, estado: "Finalizado", fecha: "2026-10-25", hora: "08:25" },
  { id: 16, numero: "A-001", idUsuario: 5, idServicio: 2, estado: "Cancelado", fecha: "2026-10-25", hora: "09:00" },
  { id: 17, numero: "T-001", idUsuario: 7, idServicio: 3, estado: "Finalizado", fecha: "2026-10-25", hora: "09:30" },
  { id: 18, numero: "A-021", idUsuario: 2, idServicio: 2, estado: "Finalizado", fecha: "2026-10-20", hora: "10:15" },
  { id: 19, numero: "T-008", idUsuario: 2, idServicio: 3, estado: "Cancelado", fecha: "2026-10-14", hora: "14:30" },
  { id: 20, numero: "P-004", idUsuario: 2, idServicio: 4, estado: "Finalizado", fecha: "2026-10-02", hora: "09:40" },
  { id: 21, numero: "C-030", idUsuario: 2, idServicio: 1, estado: "Finalizado", fecha: "2026-09-25", hora: "11:05" }
];

// Funciones de apoyo que usan todas las pantallas.

function buscarServicio(id) {
  for (let i = 0; i < servicios.length; i++) {
    if (servicios[i].id === id) {
      return servicios[i];
    }
  }
  return null;
}

function buscarUsuario(id) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].id === id) {
      return usuarios[i];
    }
  }
  return null;
}

function buscarUsuarioPorCorreo(correo) {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].correo === correo) {
      return usuarios[i];
    }
  }
  return null;
}

function siguienteId(lista) {
  let mayor = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id > mayor) {
      mayor = lista[i].id;
    }
  }
  return mayor + 1;
}

function estaEnFila(turno) {
  return turno.estado === "Pendiente" || turno.estado === "En espera";
}

function personasEnEspera(idServicio) {
  let total = 0;
  for (let i = 0; i < turnos.length; i++) {
    if (turnos[i].idServicio === idServicio && turnos[i].fecha === fechaHoy && estaEnFila(turnos[i])) {
      total++;
    }
  }
  return total;
}

function personasDelante(turno) {
  let total = 0;
  for (let i = 0; i < turnos.length; i++) {
    let otro = turnos[i];
    if (otro.idServicio === turno.idServicio && otro.fecha === turno.fecha && otro.id < turno.id && estaEnFila(otro)) {
      total++;
    }
  }
  return total;
}

// Personas delante por el tiempo promedio del servicio.
function tiempoEstimado(turno) {
  return personasDelante(turno) * buscarServicio(turno.idServicio).tiempoPromedio;
}

function horarioTexto(idServicio) {
  let texto = "";
  for (let i = 0; i < horarios.length; i++) {
    if (horarios[i].idServicio === idServicio) {
      texto += (texto === "" ? "" : "<br>") + horarios[i].dia + ": " + horarios[i].apertura + " a " + horarios[i].cierre;
    }
  }
  return texto === "" ? "Sin horario definido" : texto;
}

function claseEstado(estado) {
  switch (estado) {
    case "Pendiente":
      return "estado estado-pendiente";
    case "En espera":
      return "estado estado-espera";
    case "En atencion":
      return "estado estado-atencion";
    case "Finalizado":
      return "estado estado-finalizado";
    default:
      return "estado estado-cancelado";
  }
}

function etiquetaEstado(estado) {
  return '<span class="' + claseEstado(estado) + '">' + estado + "</span>";
}

// Convierte 2026-10-26 en 26/10/2026.
function formatoFecha(fecha) {
  return fecha.charAt(8) + fecha.charAt(9) + "/" + fecha.charAt(5) + fecha.charAt(6) + "/" +
    fecha.charAt(0) + fecha.charAt(1) + fecha.charAt(2) + fecha.charAt(3);
}

function alerta(tipo, texto) {
  return '<div class="alert alert-' + tipo + '" role="alert">' + texto + "</div>";
}
