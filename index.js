var level = 0
var keyAnswer = []
var userAnswer = []
var goThrough = false
var start = true

var options = ["green", "red", "blue", "purple"]

function randomColor() {
  var index = Math.floor(Math.random() * 4)
  return options[index]
}
$(document).keypress(function() {
  if (start == true) {
    newGame()
    start = false
  }
})

$(".level-heading").text("Press any key to start")

$(".choice").click(function (e) {
  var colorSelected = e.currentTarget.classList[2]
  console.log(colorSelected)
  animationChoice(colorSelected)
  setTimeout(function() {
    userAnswer.push(colorSelected);
    checkAnswer(userAnswer.length - 1)
  } ,500)
})

$("button").click(function() {
  startAgain()
  }
)


function checkAnswer (level_check) {
  if (keyAnswer[level_check] === userAnswer[level_check]) {
    if (keyAnswer.length == userAnswer.length) {
      setTimeout(function () {
        console.log("Next level");
        newGame()
      }, 1000) 
    }
  } 
  else {
    $(".level-heading").text("Wrong. Press any key to start over")
    startAgain()
  }
}

function animationChoice(color) {
  $("." + color).addClass("animate");
  setTimeout(function () {
    $("." + color).removeClass("animate");
  }, 500)
}

function newGame() {
  level++;
  $(".level-heading").text("Level " + level)
  userAnswer = []
  colorCurrentLevel = randomColor()
  console.log(colorCurrentLevel)
  keyAnswer.push(colorCurrentLevel)
  
  animationChoice(colorCurrentLevel)
}

function startAgain(){
  level = 0;
  keyAnswer = [];
  start=true;
}


