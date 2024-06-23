
document.querySelector('.menu-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
  document.body.classList.toggle('menu-active');
});
