$(document).ready(function() {

  var fadeSwap = function(oldClass, newClass, fadeTime) {
    $(oldClass).fadeOut(fadeTime);
    setTimeout(function(){
      $(newClass).fadeIn(fadeTime)
    }, fadeTime);
  }

  $(".player-choice").click(function() {
    var targetClass = $(this).val();
    fadeSwap(".scene", targetClass, 2000);
  })

  $(".option").click(function(){

  });

  $("#scene-character-creator").fadeIn(1200);
});
