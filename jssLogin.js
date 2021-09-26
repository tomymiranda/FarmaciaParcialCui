var usuario = document.getElementById("ingresoUsuario");
var clave = document.getElementById("claveUsuario");
var regExp = /^([0-9])*$/;   //[0123456789]{1,8}/;

function redirigir(){
    window.location.href ="pantallaPrincipal.html";
}
function enviarDatos(){
    if(!regExp.test(usuario.value)){
      alert("el usuario ingresado debe ser un numero");
    }
    else if(clave.value.length < 4 ){
      alert("el tamaño de la clave debe ser por lo menos 4");
    }
    else{
      redirigir()
    }
}

document.getElementById("botonIniciarSesion").addEventListener("click",enviarDatos);
  
