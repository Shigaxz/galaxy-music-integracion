Proyecto: Galaxy Music

Proyecto desarrollado para la asignatura Integración de plataformas_003D
encargados del departamento de marketing.

Herramients utilizadas:

-Framework: Angular (Typescript)
-Nodejs
-Firebase

Requisitos:
1.- Para el primer paso para levantar la aplicacion hay que descargar e instalar Nodejs.

2.- Instalaremos Ionic.
```bash
npm install -g @ionic/cli
```

3.- Instalaremos las dependencias del proyecto.
```bash
npm install
```
4.- Levantaremos de forma local el proyecto
```bash
ionic serve
```
Sistema:

Aplicación Angular hosteada con netlify desde el repositorio de github, y api levantada desde un directorio local.
Sitio web: https://galaxy-app-int.netlify.app/tabs/tab1
(Si aparece el error Page Not Found, solo debe hacer click en Back to our site)

Nosotros como departamento de marketing nos encargamos de crear promociones con los productos recibidos
y enviar estas por medio de una API Rest.
Promo: https://galaxy-music-apirest.netlify.app/.netlify/functions/server/promos