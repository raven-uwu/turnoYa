<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Servicios | TurnoYa</title>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/estilos.css">
  </head>
  <body>
    <header class="encabezado">
      <a class="marca" href="../index.php"><img src="../img/logo.svg" alt="Logo de TurnoYa">TurnoYa</a>
      <nav>
        <ul class="menu-lista">
          <li><a class="menu-enlace" href="../index.php">Inicio</a></li>
          <li><a class="menu-enlace activo" href="servicios.php">Servicios</a></li>
          <li><a class="menu-enlace" href="login.php">Iniciar sesion</a></li>
          <li><a class="menu-enlace" href="registro.php">Registrarse</a></li>
        </ul>
      </nav>
    </header>

    <main class="container contenido">
      <h1 class="titulo-pagina">Servicios disponibles</h1>
      <p class="subtitulo">Elija el servicio que necesita. Para pedir un turno debe iniciar sesion.</p>

      <section class="row" id="listaServicios"></section>
    </main>

    <footer class="pie">
      <p>TurnoYa - Filas y turnos virtuales - SC-502 Ambiente Web Cliente Servidor</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="../js/datos.js"></script>
    <script src="../js/publico.js"></script>
  </body>
</html>
