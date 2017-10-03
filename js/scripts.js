$(document).ready(function() {

  $("button[needsflag]").hide();

  var fadeSwap = function(oldClass, newClass, fadeTime) {
    $(oldClass).fadeOut(fadeTime);
    $(".popover").fadeOut(fadeTime);
    setTimeout(function(){
      $(newClass).fadeIn(fadeTime)
    }, fadeTime);
  }

  var removeFlag = function(flag) {
    $("button[needsflag='" + flag + "']").hide();
    $("button[canthaveflag='" + flag + "']").show();
  }

  var addFlag = function(flag) {
      $("button[needsflag='" + flag + "']").show();
      $("button[canthaveflag='" + flag + "']").hide();
  }

  var updateFlags = function(self) {
    var flagToAdd = self.attr("addflag");
    if (flagToAdd) {
      addFlag(flagToAdd);
    }
    var flagToRemove = self.attr("removeflag");
    if (flagToRemove) {
      removeFlag(flagToRemove)
    }
  }

  $(".player-choice").click(function() {
    var self = $(this)
    var targetClass = self.val();
    updateFlags(self);
    fadeSwap(".scene", targetClass, 2000);
  })

  $(".option").click(function(){
    $(".character-type").removeClass("highlight");
    var self = $(this);
    self.parent().addClass("highlight");
    updateFlags(self);
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
