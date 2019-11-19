var AnimateAboutSections = (function () {
  
  var sectionsAndAnimations = {
    introTxt: 'animated rotateInDownLeft',
    introImg: 'animated rotateInDownRight',
    secondTxt: 'animated rotateInDownRight',
    secondImg: 'animated rotateInDownLeft',
    thirdTxt: 'animated rotateInDownLeft',
    thirdImg: 'animated rotateInDownRight',
    outroTxt: 'animated flipInX',
    outroImg: 'animated fadeIn'
  }

  return {
    init
  }


  function init () {
    for (let section of Object.keys(sectionsAndAnimations)) {
      $(`.js--${section}`).waypoint(function(direction) {
        $(`.js--${section}`).addClass(sectionsAndAnimations[section]);
      }, {
        offset: '80%'
      })
    }
  }
})();