var img_array=[
  "./imagenes/Fachada_puerta_cerrada.png",
  "./imagenes/Fachada_puerta_cerrada_de_on.png",
  "./imagenes/Fachada_puerta_cerrada_iz_on.png",
  "./imagenes/Fachada_puerta_cerrada_both_on.png",
  "./imagenes/Fachada_puerta_abierta.png",
  "./imagenes/Fachada_puerta_abierta_de_on.png",
  "./imagenes/Fachada_puerta_abierta_iz_on.png",
  "./imagenes/Fachada_puerta_abierta_both_on.png"
  ];
var indice=0;

function cambiarImagen() {
  indice=(indice+1)%8;
  var image = document.getElementById('imagenCasa');
  image.src=img_array[indice];
}
