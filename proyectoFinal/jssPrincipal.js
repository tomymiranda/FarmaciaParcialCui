function redirigir(){
    window.location.href ="index.html";
  }

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const $usuario = urlParams.get('usuario')
console.log($usuario);

document.getElementById("usuarioLogeado").textContent = $usuario;
document.getElementById("botonSalir").addEventListener("click",redirigir);
