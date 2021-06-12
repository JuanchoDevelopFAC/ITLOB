PASOS PARA INICIAR LA APLICACIÓN.

Como primer paso se debe de tener la base de datos de mongoDB en el entorno local,
la tabla se llama: ITLOB_db y tiene una colección con el nombre de empleados

Servidor: Desde consola se corre con el comando: nodemon server.js
Aplicación Web: Desde consola se corre con el comando: npm run start y se abre en el navegado desde localhost:4200

El funcionamiento de la aplicación es el siguiente:
    *Sí no existe valor alguno en el input del formulario y se oprime el botón,
    el api nos devolverá todos los registros que se tengan en la BD

    *Para realizar la busqueda solo se tiene implementado el filtro por nombre de usuario