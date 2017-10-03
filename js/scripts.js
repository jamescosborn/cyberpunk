$(document).ready(function() {

  $("button[needsflag]").hide();

  var fadeSwap = function(oldClass, newClass, fadeTime) {
    $(oldClass).fadeOut(fadeTime);
    $(".popover").fadeOut(fadeTime);
    setTimeout(function(){
      $(newClass).fadeIn(fadeTime)
    }, fadeTime);
  }

  $(".player-choice").click(function() {
    var targetClass = $(this).val();
    var flag = $(this).attr("addflag");
    if (flag) {
      $("button[needsflag='" + flag + "']").show();
      $("button[canthaveflag='" + flag + "']").hide();
    }
    fadeSwap(".scene", targetClass, 2000);
  })

  $(".option").click(function(){
    $(".character-type").removeClass("highlight");
    $(this).parent().addClass("highlight");

  });

  var introfade = 200;

  $("#intro-quote").fadeIn(introfade*2);

  setTimeout(function() {
    $("#intro-quote").fadeOut(introfade*2);
    setTimeout(function() {
      $("#scene-character-creator").fadeIn(introfade*2);
    }, introfade*2);
  }, introfade*4);

  $(function () {
  $('[data-toggle="popover"]').popover()
  $('[data-toggle="popover2"]').popover()
});
});
