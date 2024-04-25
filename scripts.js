const gallery = document.querySelector('.gallery');
gallery.addEventListener('mouseover', () => {
    const images = gallery.querySelectorAll ('li');
    images.forEach(image => {
        image.style.animationPlayState = 'paused';
    });
});
gallery.addEventListener('mouseout', () =>{
    const images = gallery.querySelectorAll('li');
    images.forEach(image =>{
        image.style.animationPlayState = 'runing';
    });
});
const images = document.querySelectorAll('.gallery li');
images.forEach (image => {
    image.addEventListener('click', () => {
        const imageUrl = image.querySelector ('img').src;
        window.open(imageUrl, 'blank');
    });
});
// Funcionalidad para el menú de navegación
function activarSeccion(seccion){
    document.querySelectorAll('section').forEach((sec)=>{
        sec.style.display ='none';
    });
    document.querySelector(seccion).style.display = 'block';
}
document.addEventListener('DOMcontentLoaded', function(){
// Mostrar solo la selección de novedades al cargar la página
    activarSeccion('#novedades');
// Eventos para los botones del menú
    document.querySelectorAll('nav ul li a').forEach((link)=>{
        link.addEventListener('click', function(e){
            e.preventDefault();
            activarSeccion(this.getAttribute('href'));
        });
    });
});
// Funcionalidad para el formulario de registro
document.querySelector('#registro').addEventListener('submit', function(e){
    e.preventDefault();
// Aquí puedes añadir la lógica para manejar el registro
    alert('¡Registro Completado!');
});
// Funcionalidad para el formulario de contacto
document.querySelector('#contacto').addEventListener('submit', function(e){
    e.preventDefault();
// Aquí puedes añadir la lógica para manejar el contacto
    alert('¡Mensaje Enviado!');
});
// Añade más interactividad y funcionalidades dinámicas aquí
