// Animates the main heading characters
// Sound effects obtained from https://www.zapsplat.com

var AnimateChars = (function () {

  var charactersAndAnimations = {
    fairy: 'wobble',
    king: 'tada',
    princess: 'bounce',
    witch: 'swing', 
    apple: 'jello',
    gnome: 'heartBeat',
    rabbit: 'rubberBand',
    castle: 'shake'
  }

  return {
    init
  }

  function init() {
    var characters = Object.keys(charactersAndAnimations);

    // handle sound toggle
    // originally implemented due to firefox prohibiting autoplay
    // workaround is to add a toggle button so user opts in to audio
    $('.js--soundToggle').click(function () {
      if ($('.js--soundOff').hasClass('d-md-block')) {
        $('.js--soundOn').addClass('d-md-block');
        $('.js--soundOff').removeClass('d-md-block');
        for (let character of characters) {
          setAudioOnHover(character);
        } 
      } else {
        $('.js--soundOn').removeClass('d-md-block');
        $('.js--soundOff').addClass('d-md-block');
          for (let character of characters) {
            $(`#${character}`).off('mouseenter', playAudio);
            $(`#${character}`).off('mouseleave', pauseAudio);
          }
      }          
    })
    
    // add movement animations to characters
    for (let character of characters) {
      $(`#${character}`).removeClass(`${character}-slide`);
      $(`#${character}`).addClass('float');
      
      setAnimateOnHover(character, charactersAndAnimations[character]);
    }

    // make audio switch visible
    $('#audio-switch').addClass('fadeIn');
    $('#audio-switch').css('opacity', '');
  }

  function setAnimateOnHover(character, animation) {
    $(`#${character}`).mouseenter(function () {
      $(this).addClass(animation);
    });
    $(`#${character}`).mouseleave(function () {
      $(this).removeClass(animation);
    })
  }

  function setAudioOnHover(character) {
    $(`#${character}`).mouseenter(playAudio);
    $(`#${character}`).mouseleave(pauseAudio);    
  }

  function playAudio () {
    $(`#${this.id}Sound`)[0].currentTime = 0;
    $(`#${this.id}Sound`)[0].play()
      .catch(function (error) {
        // do nothing
      });
  }

  function pauseAudio () {
    $(`#${this.id}Sound`)[0].pause();
  }

})();
