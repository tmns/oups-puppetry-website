$(document).ready(function() {

  // reverse circle the header text
  new CircleType(document.getElementById("header-text"));

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

  // // initialize scrollspy
  // $("body").scrollspy({ target: "#main-nav" });

  // // smooth scroll
  // $("#main-nav a").on("click", function(event) {
  //   if (this.hash !== "") {
  //     event.preventDefault();
  //     const hash = this.hash;
  //     $("html, body").animate(
  //       {
  //         scrollTop: $(hash).offset().top - 110
  //       },
  //       900
  //     );
  //   }
  // });
});
