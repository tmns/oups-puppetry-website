$(document).ready(function() {

  // reverse circle the header text
  new CircleType(document.getElementById("header-text"));

  // make the circle header text visible
  $('#header-text').css('opacity', '100');

  // execute common tasks
  SharedJS.init();
  
  // initialize character animations once they have finished 'falling'
  setTimeout(AnimateChars.init, 3500);

  // initialize lightbox for photo gallery
  $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  // initialize our animated sections
  AnimateIndexSections.init();
});
