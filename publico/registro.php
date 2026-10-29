<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro | TurnoYa</title>
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
          <li><a class="menu-enlace" href="servicios.php">Servicios</a></li>
          <li><a class="menu-enlace" href="login.php">Iniciar sesion</a></li>
          <li><a class="menu-enlace activo" href="registro.php">Registrarse</a></li>
        </ul>
      </nav>
    </header>

    <main class="container contenido">
      <section class="formulario">
        <h1 class="titulo-pagina text-center">Crear una cuenta</h1>
        <p class="subtitulo text-center">Registrese para pedir turnos y seguir su lugar en la fila.</p>

        <article class="card tarjeta">
          <div class="card-body">
            <div id="mensaje"></div>
            <form id="formRegistro" action="../cliente/panel.php" method="post">
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre completo</label>
                <input type="text" class="form-control" id="nombre" name="nombre" required>
              </div>
              <div class="mb-3">
                <label for="correo" class="form-label">Correo electronico</label>
                <input type="email" class="form-control" id="correo" name="correo" placeholder="nombre@correo.com" required>
              </div>
              <div class="mb-3">
                <label for="telefono" class="form-label">Telefono</label>
                <input type="text" class="form-control" id="telefono" name="telefono" placeholder="8888-8888" required>
              </div>
              <div class="mb-3">
                <label for="contrasena" class="form-label">Contrasena</label>
                <input type="password" class="form-control" id="contrasena" name="contrasena" placeholder="Al menos 8 caracteres" required>
              </div>
              <div class="mb-3">
                <label for="confirmar" class="form-label">Confirmar contrasena</label>
                <input type="password" class="form-control" id="confirmar" name="confirmar" required>
              </div>
              <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="terminos" name="terminos">
                <label class="form-check-label" for="terminos">Acepto las condiciones de uso de TurnoYa</label>
              </div>
              <button type="submit" class="btn btn-turnoya">Crear cuenta</button>
            </form>
            <p class="enlace-formulario">Si ya tiene una cuenta, <a href="login.php">inicie sesion aqui</a>.</p>
          </div>
        </article>
      </section>
    </main>

    <footer class="pie">
      <p>TurnoYa - Filas y turnos virtuales - SC-502 Ambiente Web Cliente Servidor</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="../js/datos.js"></script>
    <script src="../js/publico.js"></script>
  </body>
</html>
