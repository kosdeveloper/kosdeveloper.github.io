// Función para borrar una cookie por su nombre
function borrarCookie(nombre) {
  document.cookie = nombre + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
}
// Borrar las cookies especificadas
borrarCookie("idioma");
borrarCookie("esquemaColor");
borrarCookie("haVotadoEncuesta");

//document.cookie = "idioma=es; expires=Thu, 18 Dec 2013 12:00:00 UTC";
// Imprimir las cookies después de borrarlas (esto debería mostrar una cadena vacía)
console.log("Cookies borradas: ", document.cookie);


