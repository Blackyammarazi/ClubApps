const form = document.getElementById('clubForm');
const miembrosList = document.getElementById('miembros');

// Cargar miembros guardados al inicio
let miembros = JSON.parse(localStorage.getItem('miembros')) || [];
renderMiembros();

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nombre = document.getElementById('nombre').value.trim();
  
  if (nombre === '') {
    alert('El nombre no puede estar vacío');
    return;
  }

  if (miembros.includes(nombre)) {
    alert('Ese miembro ya existe');
    return;
  }

  miembros.push(nombre);
  localStorage.setItem('miembros', JSON.stringify(miembros));

  renderMiembros();
  form.reset();
});

// Función para renderizar miembros
function renderMiembros() {
  miembrosList.innerHTML = '';
  miembros.forEach(nombre => {
    const li = document.createElement('li');
    li.textContent = nombre;
    miembrosList.appendChild(li);
  });
}