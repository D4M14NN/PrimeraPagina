function showAlert(){ 
    alert("Hola esta es una alerta de Javascript");
}


<form id="myForm">
  <label for="email">Correo electrónico:</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Enviar</button>
</form>

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});


function validateEmail(email) {
  const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
  return regex.test(email)
}
function validateForm() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
  } else {
    alert('Correo electrónico enviado correctamente.');
  }
}
