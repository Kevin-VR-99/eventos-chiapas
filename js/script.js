// === script.js ===

// Efecto visual al hacer clic en el botón
document.querySelector('.btn').addEventListener('click', () => {
  document.body.style.background = 'linear-gradient(135deg, #81ecec, #74b9ff, #a29bfe)';
});

// Validación simple de formulario
function validarFormulario() {
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;

  if (nombre.trim() === '') {
    alert('Por favor, ingresa tu nombre.');
    return false;
  }

  if (correo.trim() === '') {
    alert('Por favor, ingresa tu correo.');
    return false;
  }

  return true;
}
