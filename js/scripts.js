$(document).ready(function() {

  var fadeSwap = function(oldClass, newClass, fadeTime) {
    $(oldClass).fadeOut(fadeTime);
    $(".popover").fadeOut(fadeTime);
    setTimeout(function(){
      $(newClass).fadeIn(fadeTime)
    }, fadeTime);
  }

  $(".player-choice").click(function() {
    var targetClass = $(this).val();
    fadeSwap(".scene", targetClass, 2000);
  })

  $(".option").click(function(){
    $(".character-type").removeClass("highlight");
    $(this).parent().addClass("highlight");

  });

  $("#scene-character-creator").fadeIn(1200);

  $(function () {
  $('[data-toggle="popover"]').popover()
  $('[data-toggle="popover2"]').popover()
});
});
