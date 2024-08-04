function showAlert(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const fecha = document.getElementById('fecha').value;
    const mensaje = document.getElementById('mensaje').value;
    alert(`Nombre: ${nombre}\nApellido: ${apellido}\nTeléfono: ${telefono}\nEmail: ${email}\nFecha: ${fecha}\nMensaje: ${mensaje}`);
}