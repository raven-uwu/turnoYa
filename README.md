# TurnoYa

Aplicación web para gestionar filas y turnos virtuales. El cliente pide un turno sin estar en el lugar, ve cuántas personas tiene delante, el tiempo estimado de espera y el estado de su turno. El administrador atiende la cola, gestiona los servicios, los horarios y los usuarios, y consulta los reportes.

Proyecto del curso SC-502 Ambiente Web Cliente Servidor, Universidad Fidélitas, III cuatrimestre 2026.

## Integrantes

Maria Jose Araya Camacho


## Tecnologías

- HTML5 y CSS3
- Bootstrap 5.3.3
- JavaScript
- PHP y MySQL sobre XAMPP (Apache)

## Cómo ejecutarlo

1. Instalar XAMPP y encender Apache desde el panel de control.
2. Clonar el repositorio dentro de `C:\xampp\htdocs\turnoya`.
3. Abrir `http://localhost/turnoya/` en el navegador.

Cuentas de prueba para el inicio de sesión (cualquier contraseña de 8 caracteres o más):

- Administrador: `admin@ejemplo.com`
- Cliente: `ana@ejemplo.com`

## Estado del proyecto

Avance 2: front end completo. Mientras no hay base de datos, las pantallas usan los datos de ejemplo de `js/datos.js`, así que los cambios que se hacen en pantalla se pierden al recargar la página.

## Estructura

```
turnoya/
├── index.php          Inicio
├── css/               estilos.css (común), cliente.css, admin.css
├── js/                datos.js (datos de ejemplo), publico.js, cliente.js, admin.js
├── img/               logo
├── publico/           servicios, registro, login
├── cliente/           panel, solicitar turno, mi turno, historial, perfil
└── admin/             panel, cola, servicios, horarios, usuarios, reportes
```

## Ramas

- `main`: versión estable.
- `feature/publico`: parte pública y base común.
- `feature/cliente`: módulo del cliente.
- `feature/admin`: módulo del administrador.

Cada integrante trabaja en su rama, hace commits desde su propia cuenta y une sus cambios a `main` con un Pull Request.
