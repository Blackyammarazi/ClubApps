// Cargar al inicio
document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("lista");
  const miembros = JSON.parse(localStorage.getItem("miembros")) || [];

  miembros.forEach(nombre => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
});

// Guardar al agregar
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const input = document.getElementById("nombre");
  const nombre = input.value.trim();

  if (nombre !== "") {
    const lista = document.getElementById("lista");
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);

    // Guardar en localStorage
    const miembros = JSON.parse(localStorage.getItem("miembros")) || [];
    miembros.push(nombre);
    localStorage.setItem("miembros", JSON.stringify(miembros));

    input.value = "";
  }

// script.js
document.getElementById("btn1").addEventListener("click", () => {
  alert("Hiciste clic en Botón 1");
});
document.getElementById("btn2").addEventListener("click", () => {
  alert("Hiciste clic en Botón 2");
});

});