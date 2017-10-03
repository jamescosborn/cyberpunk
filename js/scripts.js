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

  $("#intro-quote").fadeIn(1200);

  setTimeout(function() {
    $("#intro-quote").fadeOut(2000);
    setTimeout(function() {
      $("#scene-character-creator").fadeIn(2000);
    }, 2000);
  }, 4000);

  $(function () {
  $('[data-toggle="popover"]').popover()
  $('[data-toggle="popover2"]').popover()
});
});
