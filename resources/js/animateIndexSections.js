var AnimateIndexSections = (function () {
  
  var sectionsAndAnimations = {
    aggeliki: 'animated slideInLeft',
    aleksandros: 'animated slideInRight',
    whatHeader: 'animated flipInX',
    whoHeader: 'animated flipInX',
    galleryPhotos: 'animated fadeIn',
    subscribeHeader: 'animated flipInX',
    subscribeForm: 'animated fadeIn',
    contactHeader: 'animated flipInX',
    contactForm: 'animated fadeIn',
    bottomLogo: 'animated rotateInDownRight'
  }

  return {
    init
  }


  function init () {
    for (let section of Object.keys(sectionsAndAnimations)) {
      $(`.js--${section}`).waypoint(function(direction) {
        $(`.js--${section}`).addClass(sectionsAndAnimations[section]);
      }, {
        offset: '50%'
      })
    }
  }
})();