document.addEventListener('DOMContentLoaded', function() {
    // Efecto de scroll para el header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Cálculo de cotización
    const servicioSelect = document.getElementById('servicio');
    const precioInput = document.getElementById('precio');
    const cantidadInput = document.getElementById('cantidad');
    const monedaSelect = document.getElementById('moneda');
    const totalSpan = document.getElementById('total');

    function calcularTotal() {
        const precio = parseFloat(precioInput.value) || 0;
        const cantidad = parseInt(cantidadInput.value) || 0;
        const total = precio * cantidad;
        totalSpan.textContent = total.toFixed(2);
    }

    precioInput.addEventListener('input', calcularTotal);
    cantidadInput.addEventListener('input', calcularTotal);

    // Validación de formularios
    const cotizacionForm = document.querySelector('.cotizacion-form');
    const contactoForm = document.querySelector('.contacto-form');

    cotizacionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Cotización enviada con éxito.');
    });

    contactoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensaje enviado con éxito.');
    });
});