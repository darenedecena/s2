document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".day-button");
    const squares = document.querySelectorAll(".square");
  
    buttons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        squares.forEach(function (square) {
          square.classList.remove("falling");
        });
  
        squares[index].classList.add("falling");
  
        setTimeout(function () {
          squares[index].style.backgroundColor = "#ffffff";
        }, 100);
  
        if (index > 0) {
          setTimeout(function () {
            squares[index - 1].style.backgroundColor = squares[index - 1].style.borderColor;
            squares[index - 1].classList.remove("falling");
          }, 1000);
        }
      });
    });
  });
  