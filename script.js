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
// Obtener y limpiar espacios extra
const name = nameInput.value.trim();

// Validación: campo vacío
if (name === "") {
  alert("⚠️ El nombre no puede estar vacío.");
  return;
}

// Validación: duplicados (case insensitive)
if (names.includes(name.toLowerCase())) {
  alert("⚠️ Ese nombre ya fue agregado.");
  return;
}

// Validación: longitud máxima (extra a maxlength del HTML)
if (name.length > 50) {
  alert("⚠️ El nombre no puede tener más de 50 caracteres.");
  return;
}

// Guardar en lista (en minúsculas para validar duplicados)
names.push(name.toLowerCase());

}