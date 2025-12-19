document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('primary-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', function() {
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('show');
  });
});
