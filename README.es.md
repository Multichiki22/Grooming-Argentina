# Grooming-Argentina DEMO
[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/Multichiki22/Grooming-Argentina/blob/Dev/README.md)

## Ques esto?
Este repositorio es una muestra del proyecto que realizamos para grooming argentina donde aplicamos multiples conocimientos y habilidades como desarrolladores y los pusimos en practica para un cliente real.

## Como se ve la pagina?

<a href="https://grooming-argentina-client-demo.vercel.app/" target="blank"><b>Mira la demo de la aplicacion aqui</b></a>

**La informacion mostrada en esta pagina es unicamente de muestra y no es reflejo de informacion real.**
__Actualmente esta pagina no tiene dominio o certificado ssl pero es completamente funcional__

<a href="https://grooming-argentina-demo-dashboard.vercel.app/" target="blank"><b>Mira la demo del panel de control aqui</b></a>

**La informacion mostrada en esta pagina es unicamente de muestra y no es reflejo de informacion real.**
__Actualmente esta pagina no tiene dominio o certificado ssl pero es completamente funcional__

Para esta aplicacion se necesita un usuario y contraseña, aqui se van a proveer multiples usuarios para revisar las funionalidades de la pagina. Sientase libre de hacer modificaciones a la informacion, al ser una demo esta informacion sera borrada y remplazada periodicamente.

```
Name: usuario de muestra Admin
username: 1111111111
password: 1111111111

Name: usuario de muestra Human Resourses
username: 2222222222
password: 2222222222

Name: usuario de muestra Editor
username: 3333333333
password: 3333333333

Name: usuario de muestra Volunteer
username: 4444444444
password: 4444444444

Name: usuario de muestra User
username: 5555555555
password: 5555555555
```
## Tecnologias usadas
### API Deployment
- AWS EC2
- Docker
- Linux
### API
- Express
- MongoDB
- Mongoose
- JWT
- Cloudinary
- Firebase storage
### Client / Dashboard
- Html
- Css
- Boostrap
- React
- Redux

## Que puede hacer la pagina
Debido al tamaño de la aplicaion completa las funcionalidades seran divididas en 3 partes.

## API

### Autenticación y Autorización
- Permite el acceso solo a personas autorizadas.
- Valida las peticiones según el rol del usuario.
- Permite añadir nuevos usuarios y definir sus roles.
### Almacenamiento de Datos
- Permite guardar los datos en la base de datos.
- Permite guardar documentos subidos en Firebase.
### Funcionalidades para Usuarios
- Permite generar links de recuperación de contraseña.
- Permite suscribir usuarios a newsletters.
- Facilita la recepción de información de los aplicantes a voluntariado.
- Permite a los usuarios leer blogs y noticias.
### Funcionalidades de Contenido
- Permite a los roles autorizados:
  - Leer, crear, editar y borrar noticias.
  - Leer, crear, editar y borrar blogs.
  - Leer, crear, editar y borrar sus propios blogs.
  - Crear cursos.
  - Ver cursos.
  - Leer, crear, editar y borrar categorías.

## CLIENT

### Navegación Intuitiva
- El Frontend proporciona una navegación intuitiva, lo que facilita la exploración de todas sus características.
### Múltiples Vistas
- Ofrece múltiples vistas para una experiencia completa y variada para los usuarios.
### Barra de Navegación Versátil
- Una barra de navegación accesible en todas las páginas permite acceder a todas las vistas públicas de manera conveniente.
### Descargas de Aplicación
- La barra de navegación incluye enlaces para descargar la aplicación en dispositivos Android e iOS.
### Suscripción a Newsletters
- La barra de navegación cuenta con un botón que permite a los usuarios suscribirse a newsletters de manera sencilla.
### Inscripción de Voluntarios
- En la página de voluntario, los usuarios pueden inscribirse para el proceso de voluntariado mediante un formulario validado en todos sus campos.
### Contacto Directo
- La página de contacto ofrece múltiples opciones para ponerse en contacto, incluyendo enlaces directos para correo electrónico y WhatsApp, así como la posibilidad de enviar un correo directamente desde la página.
### Blogs Compartibles
- En la página de blogs, los usuarios pueden leer y compartir blogs en diversas redes sociales, como WhatsApp, Facebook, Twitter, Telegram y LinkedIn. También se pueden ordenar por fecha.
### Página de Inicio Informativa
- La página de inicio destaca noticias importantes a través de un banner. Luego presenta causas, eventos e instituciones asociadas antes de mostrar las últimas noticias publicadas.
### Gestión de Noticias
- La página de noticias permite ver, leer y buscar noticias, además de filtrarlas por categorías o provincias. También ofrece opciones para compartir noticias en varias redes sociales.
### Diseño Alineado a la Marca
- El Frontend presenta un diseño coherente con la identidad de la marca, asegurando una experiencia visual atractiva y consistente.
### Responsividad
- Se adapta de manera óptima a diferentes tamaños de pantalla, garantizando una experiencia de usuario adecuada en dispositivos de todos los tipos.
### Soporte de Chat
- Un botón de chat visible en todas las vistas permite a los usuarios realizar consultas o denuncias de manera rápida y sencilla.

## DASHBOARD

### Autenticación de Usuarios
- Sistema de inicio de sesión que permite el acceso solo a usuarios registrados.
### Perfil de Usuario
- Página dedicada para que los usuarios editen su información personal.
### Navegación Personalizada
- Barra de navegación que muestra opciones de menú según el rol asignado al usuario.
### Administración de Usuarios
- Página para la creación de nuevos usuarios y asignación de roles.
- Panel que permite ver y, si es apropiado, eliminar usuarios.
### Gestión de Voluntarios
- Panel dedicado para administrar el estado de los voluntarios (aprobado, pendiente, denegado).
- Visualización de nuevas solicitudes de voluntarios y su estado actual.
- Búsqueda de aspirantes por nombre o apellido.
### Notificaciones
- Los voluntarios aprobados reciben automáticamente su información de inicio de sesión por correo electrónico.
- Los voluntarios denegados tienen su información almacenada para prevenir futuros intentos de acceso.
### Detalles de Aspirantes
- Visualización completa de la información relacionada con un aspirante, incluyendo descarga de CV y documentos adjuntos.
### Denuncias
- Panel de denuncias que permite ver y seleccionar una denuncia para obtener detalles.
### Gestión de Noticias
- Panel para ver, editar y eliminar noticias existentes.
- Creación de noticias nuevas con título, imágenes, enlaces, categorías, provincia y descripción.
### Blogs
- Panel de blogs para ver y eliminar blogs existentes.
- Panel de "Mis Blogs" para ver, editar y eliminar los blogs propios.
- Panel para crear nuevos blogs.
### Suscriptores
- Panel de suscriptores que muestra los suscriptores al newsletter.
- Capacidad para descargar un informe en formato Excel con la información de los suscriptores.
### Cursos
- Panel de cursos con vídeos de los cursos subidos, que se pueden buscar u ordenar.
- Función para crear nuevos cursos.
### Paginación
- Todos los paneles están paginados y permiten cambiar la cantidad de elementos mostrados por página.


## Desarrolladores

```js
const Devs={
  "Miguel Angel Gallego": "myguelangel12@gmail.com",
  "Kevin Sebastian Patiño": "skpates18@gmail.com",
  "Ronald Ormea": "rormeas@gmail.com",
  "Jonathan Gomez": "jg350u@gmail.com",
  "Andres Vargas": "andresvargas094@gmail.com",
  "Juan Pablo Romero": "juanromeroserna@gmail.com",
  "Johan Sebastian Castro": "jszetah@gmail.com",
  }
  ```
