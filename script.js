// Obtener todos los elementos con la clase "foto-miembro"
var icons = document.getElementsByClassName('foto-miembro');

// Iterar sobre los elementos y agregar un evento de clic a cada uno
for (var i = 0; i < icons.length; i++) {
  icons[i].addEventListener('click', function() {
    // Obtener el elemento de opciones correspondiente
    var options = this.nextElementSibling;

    // Alternar la clase "visible" para aplicar el efecto de desplazamiento suave
    options.classList.toggle('visible');
  });
}
