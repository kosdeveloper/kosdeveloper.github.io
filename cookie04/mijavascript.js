document.cookie = "idioma=es";
document.cookie = "esquemaColor=dark";
document.cookie = "haVotadoEncuesta=si";

// Función para obtener el valor de una cookie por su nombre
function getCookie(nombre) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
       const [key, value] = cookie.trim().split('=');
       if (key === nombre) {
               return value;
       }
  }
  return null;
}

// Obtener y mostrar los valores de las cookies
let idioma = getCookie("idioma");
let esquemaColor = getCookie("esquemaColor");
let haVotadoEncuesta = getCookie("haVotadoEncuesta");

console.log("Valor de la cookie 'idioma':", idioma);
console.log("Valor de la cookie 'esquemaColor':", esquemaColor);
console.log("Valor de la cookie 'haVotadoEncuesta':", haVotadoEncuesta);

// Función para borrar una cookie por su nombre
function borrarCookie(nombre) {
  document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Borrar las cookies especificadas
borrarCookie("idioma");
borrarCookie("esquemaColor");
borrarCookie("haVotadoEncuesta");

// Imprimir las cookies después de borrarlas (esto debería mostrar una cadena vacía)
console.log("Todas las Cookies después de borrarlas:", document.cookie);


