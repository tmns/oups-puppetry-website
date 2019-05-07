$(document).ready(function() {
  // reverse circle the header text
  new CircleType(document.getElementById("header-text"));

  // make sure header text fits all screens
  $("header-text").fitText();

  // initialize character animations once they have finished 'falling'
  setTimeout(AnimateChars.init, 3500);

  // initialize lightbox for photo gallery
  $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  // initialize our animated sections
  AnimateSections.init();

  // get the current year for the copyright
  $("#year").text(new Date().getFullYear());

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
