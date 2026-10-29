<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio | TurnoYa</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="css/estilos.css">
  </head>
  <body>
    <header class="encabezado">
      <a class="marca" href="index.php"><img src="img/logo.svg" alt="Logo de TurnoYa">TurnoYa</a>
      <nav>
        <ul class="menu-lista">
          <li><a class="menu-enlace activo" href="index.php">Inicio</a></li>
          <li><a class="menu-enlace" href="publico/servicios.php">Servicios</a></li>
          <li><a class="menu-enlace" href="publico/login.php">Iniciar sesion</a></li>
          <li><a class="menu-enlace" href="publico/registro.php">Registrarse</a></li>
        </ul>
      </nav>
    </header>

    <main class="container contenido">
      <section class="portada">
        <h1>Pida su turno sin hacer fila</h1>
        <p>Con TurnoYa elige el servicio que necesita, recibe un numero de turno y sigue su lugar en la fila desde el celular o la computadora.</p>
        <p id="resumenHoy"></p>
        <a class="btn btn-turnoya" href="publico/servicios.php">Ver servicios</a>
        <a class="btn btn-borde" href="publico/registro.php">Crear una cuenta</a>
      </section>

      <section>
        <h2 class="titulo-pagina text-center">Como funciona</h2>
        <p class="subtitulo text-center">Tres pasos para dejar de esperar de pie.</p>
        <div class="row">
          <div class="col-sm-4 mb-3">
            <article class="card tarjeta">
              <div class="card-body">
                <div class="numero-paso">1</div>
                <h3 class="card-title titulo-tarjeta">Elija el servicio</h3>
                <p class="card-text">Revise los servicios disponibles, su horario y cuantas personas hay en espera.</p>
              </div>
            </article>
          </div>
          <div class="col-sm-4 mb-3">
            <article class="card tarjeta">
              <div class="card-body">
                <div class="numero-paso">2</div>
                <h3 class="card-title titulo-tarjeta">Reciba su numero</h3>
                <p class="card-text">Solicite el turno y el sistema le asigna un numero, por ejemplo C-015.</p>
              </div>
            </article>
          </div>
          <div class="col-sm-4 mb-3">
            <article class="card tarjeta">
              <div class="card-body">
                <div class="numero-paso">3</div>
                <h3 class="card-title titulo-tarjeta">Siga su turno</h3>
                <p class="card-text">Vea cuantas personas tiene delante, el tiempo estimado y el estado del turno hasta que lo llamen.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="row">
        <div class="col-sm-6 mb-3">
          <article class="card tarjeta">
            <div class="card-body">
              <h2 class="card-title titulo-tarjeta">Para los clientes</h2>
              <ul class="lista-ventajas">
                <li>Pedir un turno sin estar en el lugar.</li>
                <li>Ver las personas delante y el tiempo estimado de espera.</li>
                <li>Cancelar el turno si ya no lo necesita.</li>
                <li>Consultar el historial de sus turnos.</li>
              </ul>
            </div>
          </article>
        </div>
        <div class="col-sm-6 mb-3">
          <article class="card tarjeta">
            <div class="card-body">
              <h2 class="card-title titulo-tarjeta">Para las organizaciones</h2>
              <ul class="lista-ventajas">
                <li>Atender la cola y llamar al siguiente turno.</li>
                <li>Gestionar servicios, horarios y usuarios.</li>
                <li>Configurar el tiempo promedio de cada servicio.</li>
                <li>Consultar reportes de las atenciones.</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer class="pie">
      <p>TurnoYa - Filas y turnos virtuales - SC-502 Ambiente Web Cliente Servidor</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="js/datos.js"></script>
    <script src="js/publico.js"></script>
  </body>
</html>
