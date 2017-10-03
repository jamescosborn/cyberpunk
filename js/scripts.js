$(document).ready(function() {

  var fadeSwap = function(oldClass, newClass, fadeTime) {
    $(oldClass).fadeOut(fadeTime);
    setTimeOut(function(){
      $(newClass).fadeIn(fadeTime)
    }, fadeTime);
  }

  $(".player-choice").click(function() {
    var targetClass = $(this).val();
    fadeSwap(".scene", targetClass, 2000);
  })
});
