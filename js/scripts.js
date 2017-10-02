$(document).ready(function() {

  var fadeSwap = function(oldClass, newClass, fadeTime) {
    $(oldClass).fadeOut(fadeTime);
    setTimeOut(function(){
      $(newClass).fadeIn(fadeTime)
    }, fadeTime);
  }

  $(".option-button").click(function() {
    var targetClass = $(this).val();
    fadeSwap(".node", targetClass, 2000);
  })
});
