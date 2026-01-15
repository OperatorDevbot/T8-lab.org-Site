function goGateway() {
  const loader = document.getElementById('loader');
  loader.style.display = 'flex'; // show loader immediately
  window.location.href = 'gateway.html'; // navigate immediately
}
