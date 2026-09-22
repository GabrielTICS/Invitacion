/**
 * Función para confirmar asistencia vía WhatsApp con mensajes personalizados por cumpleañera.
 * @param {string} nombre - Nombre de la cumpleañera ('Camila' o 'Regina').
 */
function confirmarAsistencia(nombre) {
    // Número telefónico con código de país (México: +52)
    const numeroTelefono = "529171071820";
    let mensaje = "";

    if (nombre === 'Camila') {
        mensaje = "¡Hola! 🧜‍♀️🌊✨ ¡Qué emoción! Confirmo con mucho entusiasmo mi asistencia al cumpleaños #4 de *Camila* 🎂🎉. ¡Listos para sumergirnos en la diversión el 3 de Octubre a la 1:00 PM en Palapa Alberca Oasis! 🐠🎈";
    } else if (nombre === 'Regina') {
        mensaje = "¡Hola! 🌺🌀⛵ ¡Qué alegría! Confirmo totalmente mi asistencia al cumpleaños #2 de *Regina* 🥥🎉. ¡Estamos listos para esta gran aventura el 3 de Octubre a la 1:00 PM en Palapa Alberca Oasis! 🌊🌴";
    }

    // Codificar el texto para que sea compatible con URL de WhatsApp
    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(urlWhatsApp, '_blank');
}

// Efecto interactivo adicional al hacer clic en los botones
document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.btn-confirm');

    botones.forEach(boton => {
        boton.addEventListener('click', function () {
            // Breve feedback visual al pulsar
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});
