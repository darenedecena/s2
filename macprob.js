var currentColor = null;
var previousColor = null;
var activeBox = "big-box1";

function copyColor(day) {
  var bigBox1 = document.getElementById("big-box1");
  var bigBox2 = document.getElementById("big-box2");
  var button = document.querySelector("." + day);
  var newColor = window.getComputedStyle(button).getPropertyValue('background-color');

  currentColor = newColor;

 
  var activeBoxElement = activeBox === "big-box1" ? bigBox1 : bigBox2;
  var inactiveBoxElement = activeBox === "big-box1" ? bigBox2 : bigBox1;
  activeBoxElement.style.borderColor = newColor;
  activeBoxElement.style.transition = "transform 1s ease-in-out";
  activeBoxElement.style.transform = "translateY(0%)"; 
  activeBoxElement.style.opacity = 1;

  inactiveBoxElement.style.opacity = 0;
  inactiveBoxElement.style.transition = "transform 1s ease-in-out, opacity 1s ease-in-out";
  inactiveBoxElement.style.transform = "translateY(-100%)";

  previousColor = newColor;
  activeBox = activeBox === "big-box1" ? "big-box2" : "big-box1";
}
