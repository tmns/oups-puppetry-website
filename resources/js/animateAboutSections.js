var AnimateAboutSections = (function () {
  
  var sectionsAndAnimations = {
    introRightTxt: 'animated rotateInDownRight',
    introRightImg: 'animated rotateInDownRight',
    introLeftTxt: 'animated rotateInDownLeft',
    introLeftImg: 'animated rotateInDownLeft',
    introEndTxt: 'animated flipInX',
    aggelikiCard: 'animated rotateInDownLeft',
    aleksCard: 'animated rotateInDownRight',
    synergatesCard: 'animated fadeIn'
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