    function sendMessage(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  alert(`Gracias, ${nombre}! Tu mensaje fue enviado con éxito 💌`);
  event.target.reset();
}
