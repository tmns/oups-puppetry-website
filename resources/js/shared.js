var SharedJS = (function () {

  return {
    init
  }

  function init () {

    // get the current year for the copyright
    $("#year").text(new Date().getFullYear());
  }
})();