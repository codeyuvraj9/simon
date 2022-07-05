var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$("button").click(function() {
    var classs=this; 
    theClass = this.className;  // "this" is the element clicked
    
    $(classs).addClass("change2");
        setTimeout(function(){
            $(classs).removeClass("change2");
        },100);
        if(theClass === "b1"){
            userClickedPattern.push(1);
        }else if(theClass === "b2"){
            userClickedPattern.push(2);
        }else if(theClass === "b3"){
            userClickedPattern.push(3);
        }else{
            userClickedPattern.push(4);
        }

        checkAnswer(userClickedPattern.length-1);
    });

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      $("h1").text("Game Over, Press Any Key to Restart");
      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  
  gamePattern.push(randomNumber);

  $(".b"+randomNumber).addClass("change1");
    setTimeout(function(){
    $(".b"+randomNumber).removeClass("change1");
    },200);
}


function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


