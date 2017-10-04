$(document).ready(function() {

  var flags = [];

  $("button[needsflag]").hide();

  var fadeSwap = function(oldClass, newClass, fadeTime) {
    $(oldClass).fadeOut(fadeTime);
    $(".popover").fadeOut(fadeTime);
    setTimeout(function(){
      $(newClass).fadeIn(fadeTime)
    }, fadeTime);
  }

  var removeFlag = function(flag) {
    for (i = 0; i < flags.length; i++) {
      if (flags[i] == flag) {
        flags.slice(i, 1);
        break
      }
    }
    $("button[needsflag='" + flag + "']").hide();
    $("button[canthaveflag='" + flag + "']").show();
  }

  var addFlag = function(flag) {
    flags.push(flag);
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

  var canProgress = function() {
    if ($("#username").val().length <= 0) {
      $("#form-error").text("USER_ERROR[ID:32]='NAME INVALID'")
      return false
    } else if ( !(flags.includes("flag-order") || flags.includes("flag-chaos")) ) {
      $("#form-error").text("USER_ERROR[ID:41]='PATH INVALID'")
      return false
    }
    return true
  }

  $("#form-character").submit(function(event) {
    event.preventDefault();
    if (canProgress()) {
      var name = $("#username").val();
      $(".player-name").text(name);
    }
  });

  $(".player-choice").click(function() {
    if (!canProgress()) {
      return false;
    }
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
    $("#character-submit").show();
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
