function Player() {
  this.flags = [];
}

Player.prototype.addFlag = function(flag) {
  this.flags.push(flag);
};

Player.prototype.removeFlag = function(flag) {
  for (i = 0; i < this.flags.length; i++) {
    if (this.flags[i] == flag) {
      this.flags.slice(i, 1);
      break
    }
  }
};


var player = new Player()

$(document).ready(function() {

  $("*[needsflag]").hide();
  $("*[needsflags]").hide();

  var swapWait = false;
  //old class - current scene, new class - New Scene
  var fadeSwap = function(oldClass, newClass, fadeTime) {
    if (swapWait) {
      return false;
    }
    swapWait = true;
    $(oldClass).fadeOut(fadeTime);
    $(".popover").fadeOut(fadeTime);
    setTimeout(function(){
      $(newClass).fadeIn(fadeTime)
      swapWait = false;
    }, fadeTime);
  }

  var removeFlag = function(flag) {
    $("*[needsflag='" + flag + "']").hide();
    $("*[canthaveflag='" + flag + "']").show();
    player.removeFlag(flag);
  }

  var addFlag = function(flag) {
    $("*[needsflag='" + flag + "']").show();
    $("*[canthaveflag='" + flag + "']").hide();
    player.addFlag(flag);
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
    var nameLength = $("#username").val().replace(/\s/g, '').length
    if (nameLength < 1) {
      $("#form-error").text("USER_ERROR[ID:32]='NAME TOO SHORT'");
      return false
    } else if (nameLength > 40) {
      $("#form-error").text("USER_ERROR[ID:32]='NAME TOO LONG'");
      return false
    } else if ( !(player.flags.includes("flag-order") || player.flags.includes("flag-chaos")) ) {
      $("#form-error").text("USER_ERROR[ID:41]='PATH INVALID'");
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
    var self = $(this) // this controls specifically the clicked button
    var targetClass = self.val();
    updateFlags(self);
    fadeSwap(".scene", targetClass, 1000);
  })

  $(".option").click(function(){
    $(".character-type").removeClass("highlight");
    var self = $(this);
    self.parent().addClass("highlight");
    updateFlags(self);
    $("#character-submit").show();
  });


  var introfade = 1500;

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
