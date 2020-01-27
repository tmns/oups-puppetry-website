$(document).ready(function() {

  // execute common tasks
  SharedJS.init();

  // half circle the header text
  new CircleType(document.getElementById('header-text'))
  .dir(-1)
  .radius(384);

  // initialize lightbox for photo gallery
  $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

});
