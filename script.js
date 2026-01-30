$(document).ready(function() {
    
    // 1. Evento: Cambio de tema (Dark/Light Mode)
    $('#theme-toggle').on('click', function() {
        $('body').toggleClass('dark-mode');
        
        // Cambiar el texto del botón
        if ($('body').hasClass('dark-mode')) {
            $(this).text('Modo Claro');
        } else {
            $(this).text('Modo Oscuro');
        }
    });

    // 2. Evento: Validación de email en tiempo real
    $('#email').on('input', function() {
        const email = $(this).val();
        const feedback = $('#email-feedback');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            feedback.text('Formato de email válido').css('color', 'green');
            $(this).addClass('is-valid').removeClass('is-invalid');
        } else {
            feedback.text('Ingresa un email válido').css('color', 'red');
            $(this).addClass('is-invalid').removeClass('is-valid');
        }
    });

    // 3. Evento: Confirmación de envío del formulario
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Me pondré en contacto pronto.');
        this.reset();
        $('#email-feedback').text('');
    });
});