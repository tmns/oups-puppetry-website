// Animates the main heading characters
// Sound effects obtained from https://www.zapsplat.com
// Character images obtained from https://www.vecteezy.com/vector-art/122577-fairytale-shadow-puppets

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

  function setOnHover(character, animation) {
    $(`#${character}`).mouseenter(function () {
      $(this).addClass(animation);
      $(`#${character}Sound`)[0].currentTime = 0;
      $(`#${character}Sound`)[0].play()
        .catch(function(error) {
          // do nothing
        })
    });
    $(`#${character}`).mouseleave(function () {
      $(this).removeClass(animation);
      $(`#${character}Sound`)[0].pause();
    })
  }

  function init() {
    
    for (let character of Object.keys(charactersAndAnimations)) {
      $(`#${character}`).removeClass(`${character}-slide`);
      $(`#${character}`).addClass('float');
      
      setOnHover(character, charactersAndAnimations[character]);
    }
  }
})();