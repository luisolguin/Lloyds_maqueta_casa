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
var inicioweb=0;

function cambiarImagen() {
  indice=(indice+1)%8;
  var image = document.getElementById('imagenCasa');
  image.src=img_array[indice];
}

function ocultarSmartphone(){
  var celular=document.getElementById('smartphone');
  var btn_t_webcam=document.getElementById('btn-t-webcam')
  if(inicioweb == 0){
    webcamOn();
    celular.style.display ='block';
    btn_t_webcam.value='Ocultar';
    inicioweb=1;
  }
  else{

    if(celular.style.display == 'none'){
      celular.style.display ='block';
      btn_t_webcam.value='Ocultar';
    }

    else{

      celular.style.display ='none';
      btn_t_webcam.value='Mostrar';

    }
  }

}

function toogleDoor(){
  var puertaPrincipal= document.getElementById('btn-t-puerta');
  var image = document.getElementById('imagenCasa');
  if(puertaPrincipal.value === 'Abrir puerta'){
    puertaPrincipal.value = 'Cerrar puerta'
    indice=(indice+4)%8
    image.src=img_array[indice];

  }
  else{
    puertaPrincipal.value = 'Abrir puerta'
    indice=(indice-4)%8
    image.src=img_array[indice];
  }
}

function toggleFocusL(){
  var puertaPrincipal= document.getElementById('btn-t-foco-iz');
  var image = document.getElementById('imagenCasa');
  if(puertaPrincipal.value === 'L On'){
    puertaPrincipal.value = 'L Off'
    indice=(indice+2)%8
    image.src=img_array[indice];

  }
  else{
    puertaPrincipal.value = 'L On'
    indice=(indice-2)%8
    image.src=img_array[indice];
  }
}

function toggleFocusR(){
  var puertaPrincipal= document.getElementById('btn-t-foco-de');
  var image = document.getElementById('imagenCasa');
  if(puertaPrincipal.value === 'R On'){
    puertaPrincipal.value = 'R Off'
    indice=(indice+1)%8
    image.src=img_array[indice];

  }
  else{
    puertaPrincipal.value = 'R On'
    indice=(indice-1)%8
    image.src=img_array[indice];
  }
}
