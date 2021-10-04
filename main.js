/* Funciones cambio de landings */

/* Función Home-Formulario */
let btnHomeForm = document.getElementById("btn-form");
btnHomeForm.addEventListener("click", nextPageOne);

function nextPageOne() {
  document.getElementById("home-container").style.display = "none";
  document.getElementById("contact-container").style.display = "flex";
  document.getElementById("aboutme-container").style.display = "none";
}

/* Función Formulario-Home */
let btnFormHome = document.getElementById("btn-home");
btnFormHome.addEventListener("click", nextPageOneBack);

function nextPageOneBack() {
  document.getElementById("home-container").style.display = "flex";
  document.getElementById("contact-container").style.display = "none";
  document.getElementById("aboutme-container").style.display = "none";
}

/* Función Home-About Me*/
let btnHomeAboutme = document.getElementById("btn-aboutme");
btnHomeAboutme.addEventListener("click", nextPageTwo);

function nextPageTwo() {
  document.getElementById("home-container").style.display = "none";
  document.getElementById("contact-container").style.display = "none";
  document.getElementById("aboutme-container").style.display = "flex";
}

/* Form */

const $form = document.querySelector("#form");
$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': "application/json",
    }
  });
  if (response.ok) {
    this.reset();
    alert("¡Gracias por contactarme! :)");
  }
}
