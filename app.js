let listaAmigosSecretos = []; //1.Declarar arreglo

function agregarAmigo() { // 2. Crear funcion
    let nombreAmigo = document.getElementById("amigo").value; // 3. Capturar el valor de campo de entrada
    
    // 4. Crear condicion
    if (nombreAmigo == "") { //5. Si el campo de entrada esta vacio
        alert ("Por favor, inserte un nombre.") //6. Mostrar mensaje
    }
    else { //7. si no 
        listaAmigosSecretos.push(nombreAmigo); // 8. Agregar el nombre a la lista o arreglo
        limpiarCaja (); // 12. Llamar la funcion para que el input quede vacio
        actualizarAmigo (); //20. Llamar a la funcion para que muestre en pantalla los amigos que están guardados en la lista. 
    }    
}

function limpiarCaja() { // 9. Crear fucion de limpiar campo de entrada
    
    let campoDeEntrada = document.querySelector("#amigo");//10. Buscar en HTML el elemento amigo y guardamos ese elemento en campoDeEntrada
    campoDeEntrada.value = ""; // 11. Borrar lo que el usuario escribio (la propiedad .value contiene el texto que el usuario ha escrito entonces lo igualamos a una cadena vacia)
}

function actualizarAmigo () { // 13. Crear fucion de actualizar
    let lista = document.getElementById ("listaAmigos") // 14. Buscar la lista del HTML y guardar en la variable lista
    lista.innerHTML = "" ;// 15. Limpiar contenido previo 

    for (let nombre of listaAmigosSecretos) { // 16. Recorrer arreglo y en cada vuelta guardar el valor actual en la variable nombre
        let li = document.createElement("li"); // 17. crear un <li> para cada titulo (cada elemento del arreglo debe convertirse en un ítem de lista)
        li.textContent = nombre; // 18. Asignar a <li> el texto que esta en la variable nombre
        lista.appendChild(li); // 19. Añadir el <li> al <ul> (<ul> es el contenedor de la lista y cada <li> es un ítem dentro de esa lista.)
    }
}

function sortearAmigo() {
    //21. Validar que la lista no este vacia
    if (listaAmigosSecretos.length === 0){ //22. Verificar si todavía no se ha agregado ningún nombre a la lista
        alert ("No hay nombres en la lista para sortear") //23. Mostrar mensaje
        return; //24. Detener la función.
    }
    //25. Si no esta vacia, hacer el sorteo 
    else {
        let indiceAleatorio = Math.floor(Math.random() * listaAmigosSecretos.length); //26. Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
        let amigoSorteado = listaAmigosSecretos[indiceAleatorio]; //27. Buscar el nombre que esta en la posicion indicada y lo guarda en la variable amigoSorteado

        //28. mostrar resultado en pantalla
        let resultadoFinal = document.getElementById("resultado"); //29. Buscar en HTML el id y guardar en la variable resultadoFinal
        resultadoFinal.innerHTML = "El amigo secreto es: " + amigoSorteado; //30. Escribir en pantalla quien fue el amigo secreto que salió sorteado
    }
}
