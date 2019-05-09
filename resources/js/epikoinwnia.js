$(document).ready(function() {

  // execute common tasks
  SharedJS.init();

  // half circle the header text
  new CircleType(document.getElementById('header-text'))
  .dir(-1)
  .radius(384);
});
