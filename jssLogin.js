var usuario = document.getElementById("ingresoUsuario");
var clave = document.getElementById("claveUsuario");
var fomulario = document.getElementById("formulario");
var regExp = /^([0-9])*$/;   //[0123456789]{1,8}/;
/*
var usuarioIngresado;
function redirigir(){
    window.location.href ="pantallaPrincipal.html";
}
function validar(){
    if(!regExp.test(usuario.value)){
      alert("el usuario ingresado debe ser un numero");
      return false;
    }
    else if(clave.value.length < 4 ){
      alert("el tamaño de la clave debe ser por lo menos 4");
      return false;
    }
    else{
      return true;
    }
}
*/
fomulario.addEventListener('submit', function (event) {
  if(!regExp.test(usuario.value)){
    alert("el usuario ingresado debe ser un numero");
    event.preventDefault();
  }
  else if(clave.value.length < 4 ){
    alert("el tamaño de la clave debe ser por lo menos 4");
    event.preventDefault();
  }
});


