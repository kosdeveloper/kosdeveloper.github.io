document.cookie = "idioma=es";
document.cookie = `esquemaColor=dark;max-age=${20}`; //expira a los 20 seg
document.cookie = "haVotadoEncuesta=si";
document.cookie = "seSuscribe=no";

console.log("Cookies creadas:", document.cookie);