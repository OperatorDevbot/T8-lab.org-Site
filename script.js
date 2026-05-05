function goGateway() {
  const loader = document.getElementById('loader');
  const githubBtn = document.getElementById('githubBtn');

  // Lock UI instantly
  githubBtn.classList.add('hide-ui');
  loader.style.display = 'flex';

  // Force browser repaint BEFORE navigation
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      window.location.href = 'gateway.html';
    });
  });
}
