function cere() {
    document.getElementById("pq").style.display = "inline"; 
    document.getElementById("preg").innerHTML = "¿Por qué?"; 
}

function leche() {
    document.getElementById("pq").style.display = "none";
    document.getElementById("preg").innerHTML = "Todos saben que el cereal va primero"; 
}

function validacion() {
    if(document.getElementById("pq").value==""){
        alert("No puedes ingresar el campo vacío!");
    }
}