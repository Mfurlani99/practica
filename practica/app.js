/*Teclas filtradas (solo letras A–Z)
Objetivo: permitir escribir solo letras 
(sin números ni símbolos). Mostrar aviso si se presiona otra cosa.
Criterios:

Letras pasan; números/símbolos se previenen.

Mostrar Última tecla inválida: <key> si se intentó algo no permitido.*/

const input   = document.getElementById("input");
const muestra = document.getElementById("muestra");
const error   = document.getElementById("error");

const Letras = [];

input.addEventListener('keydown', (e) => {
  // ignorar teclas de control
  if (e.key.length > 1) return;

  if (/^[a-zA-Z]$/.test(e.key)) {
    Letras.push(e.key);
    render();
    error.textContent = "";
  } else {
    e.preventDefault(); // evita que aparezca en el input
    error.textContent = "No puedes usar esto: " + e.key;
  }
});

function render() {
  muestra.innerHTML = "";
  for (const element of Letras) {
    muestra.innerHTML += `
      <tr>
        <td>${element}</td>
      </tr>`;
  }
}