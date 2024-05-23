document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('button[data-collapse-toggle="navbar-dropdown"]');
  const navbar = document.getElementById('navbar-dropdown');

  if (button && navbar) {
      button.addEventListener('click', function () {
          const isExpanded = navbar.classList.contains('hidden');
          navbar.classList.toggle('hidden', !isExpanded);
      });
  }
});

function myalert() {
  alert("¡Esta pagina es solo un prototipo, no funcional!");
}
