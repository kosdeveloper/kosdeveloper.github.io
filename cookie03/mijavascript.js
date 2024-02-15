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

//7 segundos de vida de la cookie
document.cookie = `esquemaColor=dark;max-age=${7}`;

// reviso cookie cada 3 segundos
setInterval(() => {
  esquemaColor = getCookie("esquemaColor");
  console.log("Valor de la cookie 'esquemaColor':", esquemaColor);
}, 3000);
