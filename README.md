# Amigo Secreto - Desafío Oracle + Alura Latam

## Descripción del proyecto
Este proyecto es un programa en **JavaScript** que permite organizar un juego de **Amigo Secreto**.  
Los usuarios pueden agregar nombres a una lista, visualizarlos y sortear aleatoriamente quién es el amigo secreto de cada participante.

## Funcionalidades

### 1. Agregar amigos
Permite al usuario ingresar un nombre en un campo de texto y añadirlo a la lista de amigos.

- Captura el valor del campo de entrada.
- Valida que no esté vacío (muestra un `alert` si lo está).
- Añade el nombre al arreglo de amigos.
- Limpia el campo de entrada después de agregarlo.

### 2. Mostrar la lista de amigos
Recorre el arreglo de amigos y muestra cada nombre como un elemento `<li>` en una lista HTML.

- Obtiene el elemento de la lista en el HTML.
- Limpia la lista antes de actualizarla.
- Itera sobre el arreglo y crea un `<li>` para cada amigo.

### 3. Sortear un amigo secreto
Selecciona de manera aleatoria uno de los nombres almacenados en el arreglo.

- Verifica que haya amigos en la lista.
- Genera un índice aleatorio usando `Math.random()` y `Math.floor()`.
- Obtiene el nombre correspondiente al índice.
- Muestra el resultado en un elemento HTML usando `innerHTML`.

## Cómo usarlo
1. Abrir el archivo `index.html` en el navegador.
2. Escribir un nombre en el campo de entrada y presionar "Agregar".
3. Ver los nombres agregados en la lista.
4. Presionar "Sortear" para elegir un amigo secreto al azar.
5. El resultado se mostrará en pantalla.

## Ayuda
Si tienes problemas o dudas sobre cómo usar el programa:

- Revisa los comentarios dentro del código fuente.
- Consulta la documentación de JavaScript sobre manipulación del DOM.
- Contacta al autor del proyecto (ver sección de autores).

## Autores
- Nayibe Lizbeth - Desarrollador del proyecto
- Proyecto realizado como parte del desafío de Oracle + Alura Latam.
