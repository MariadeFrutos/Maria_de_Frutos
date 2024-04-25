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
//Obten todas las imágenes de la galería
const galleryImages = document.querySelectorAll('.product img');
//Agrega un evento click a cada imagen de la galería
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        // Agrega la clase CSS para aplicar el efecto zoom
        image.classList.add('zoomed');
        // Espera que termine la animación del zoom
        setTimeout(() =>{
            //Quita la clase CSS para restablecer el tamaño original
            image.classList.remove('zoomed');
        },1000); //Ajusta el tiempo según la duración de la aimación de zoom
    });
});
//Generar un mensaje de bienvenida aleatorio
const mensajesDivertidos = [
    "¡Bienvenido a la tienda de cómics más increíble del universo!",
    "¡Prepárate para sumergirte en el mundo de los superhéroes y las aventuras!",
    "¿Listo para encotrar los cómics más épicos y los coleccionables más buscados?",
    "¡Explora nuestro catálogo y descubre un nuevo universo de emociones!",
    "¡Aquí encontrarás todo lo que necesitas para convertirte en un verdadero fan de los cómics!"
];
const mensajeAleatorio = mensajesDivertidos[Math.floor(Math.random() * mensajesDivertidos.length)];
document.write(mensajeAleatorio);