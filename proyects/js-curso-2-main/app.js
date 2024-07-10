let titulo = document.querySelector("h1");


titulo.innerHTML = "Hora del Desafío";

function consoleAction(){

    alert("el boton console fue clickeado");
}


function promptAction(ciudadUsuario){

    ciudadUsuario = prompt ("Ingrese el nombre de una ciudad de Brasil");
    alert(`Estuve en ${ciudadUsuario} y me acordé de ti`);
}

function alertAction(){

    alert("Yo amo JS");
}

function sumaAction(){

    valor1 = parseInt (prompt ("Ingrese un numero"));
    valor2 = parseInt (prompt ("Ingrese otro numero"));
    total = valor1 + valor2;
    alert(`La suma de ambos numeros es igual a ${total}`);
}



