// Elementos
const input = document.getElementById("nombreInput");
const guardarBtn = document.getElementById("guardarBtn");
const lista = document.getElementById("listaNombres");

// Guardar nombre
guardarBtn.addEventListener("click", () => {
  const nombre = input.value.trim();

  if (nombre !== "") {
    agregarNombre(nombre);
    input.value = "";
    input.focus();
  }
});

// Agregar nombre a la lista con botón eliminar
function agregarNombre(nombre) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = nombre;

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";
  btnEliminar.classList.add("btn-eliminar");

  btnEliminar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(btnEliminar);
  lista.appendChild(li);
}