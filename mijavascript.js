//seleccionamos div
let div = document.getElementsByTagName("div")[0];

//Solicitamos al usuario los valores de los atributos
//y modificamos sus atributos data
div.dataset.ancho = prompt("Ingrese el ancho de la caja:");
div.dataset.alto = prompt("Ingrese el alto de la caja:");
div.dataset.color_borde = prompt("Ingrese el color del borde de la caja:");
div.dataset.color_texto = prompt("Ingrese el color del texto:");
div.dataset.color_fondo = prompt("Ingrese el color del fondo:");

// Aplicamos los estilos a la caja
div.style.width = div.dataset.ancho + 'px';
div.style.height = div.dataset.alto + 'px';
div.style.border = '3px solid ' + div.dataset.color_borde;
div.style.color = div.dataset.color_texto;
div.style.backgroundColor = div.dataset.color_fondo;

//mostramos por consola la estructura interna del dataset
console.info(div.dataset); 
//mostramos por consola los valores de los atributos
for(atributo of div.attributes)
    console.log(atributo);
