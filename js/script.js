// Class:        Wewb Development II
// Instructor:   Ryan Fisher
// Assignment:   Final Project
// Student:      Juan Valencia
// Date:         05/10/2019

// Global Variables
var time = 0;
var runningTime = 0;

// Start Button Function
function startButton() {
  if (runningTime == 0) {
    runningTime = 1;
    increment();
    document.getElementById("startButton").innerHTML = "Pause";
  } else {
    runningTime = 0;
    document.getElementById("startButton").innerHTML = "Resume";
  }
}

// Reset Button Function
function resetButton() {
  runningTime = 0;
  time = 0;
  setTimeout( function(){document.getElementById("startButton").innerHTML = "Go!";
  document.getElementById("outputField").innerHTML = "00:00:00";}, 101)
}

// Increment Function
function increment() {
  if (runningTime == 1) {
  setTimeout(function() {
    time++;
    var sec = Math.floor(time/10);
    var min = Math.floor(sec/60);
    var millis = time % 10;
    if (min < 10) {
      min = "0" + min;
    } if (sec < 10) {
      sec = "0" + sec;
    }

    document.getElementById("outputField").innerHTML = min + ":" + sec + ":" + "0" + millis;
    increment();
  }, 100);
}
}
