document.addEventListener("DOMContentLoaded", function() {
  var menuButton = document.getElementById('menuButton');
  var menu = document.getElementById('popupMenu');

  menuButton.addEventListener('click', function() {
    menu.classList.toggle('show');
  });

  var sizeElements = document.querySelectorAll('.size, .size1, .size2, .size3, .size4, .size5, .size6, .size7, .size8, .size9, .size10, .size11, .size12, .size13, .size14, .size15, .size16, .size17, .size18, .size19, .size20');
  sizeElements.forEach(function(element) {
    element.addEventListener('keydown', function(event) {
      event.preventDefault();
    });

    element.addEventListener('mousedown', function(event) {
      event.preventDefault();
    });
    element.addEventListener('mouseup', function(event) {
      event.preventDefault();
    });
    element.addEventListener('click', function(event) {
      event.preventDefault();
    });
  });
});