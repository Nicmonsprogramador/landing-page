document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por contactarnos. Nos pondremos en contacto contigo pronto.');
    // Aquí podrías añadir lógica para enviar el formulario a través de AJAX o similar
    this.reset(); // Reiniciar el formulario después del envío
});
