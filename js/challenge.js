document.addEventListener("DOMContentLoaded", function () {
    var counter = 0;
    var timerElement = document.getElementById("timer");

    setInterval(function () {
      counter++;
      timerElement.innerHTML = counter;
    }, 1000);
  });
  document.addEventListener("DOMContentLoaded", function () {
    var counter = 0;
    var timerElement = document.getElementById("timer");
    var incrementButton = document.getElementById("increment");
    var decrementButton = document.getElementById("decrement");

    setInterval(function () {
      counter++;
      timerElement.innerHTML = counter;
    }, 1000);

    incrementButton.addEventListener("click", function () {
      counter++;
      timerElement.innerHTML = counter;
    });

    decrementButton.addEventListener("click", function () {
      counter--;
      timerElement.innerHTML = counter;
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    var counter = 0;
    var timerElement = document.getElementById("timer");
    var incrementButton = document.getElementById("increment");
    var decrementButton = document.getElementById("decrement");
    var likeButton = document.getElementById("like");
    var likeCountElement = document.getElementById("like-count");
    var likes = {};

    setInterval(function () {
      counter++;
      timerElement.innerHTML = counter;
    }, 1000);

    incrementButton.addEventListener("click", function () {
      counter++;
      timerElement.innerHTML = counter;
    });

    decrementButton.addEventListener("click", function () {
      counter--;
      timerElement.innerHTML = counter;
    });

    likeButton.addEventListener("click", function () {
      if (likes[counter] === undefined) {
        likes[counter] = 1;
      } else {
        likes[counter]++;
      }

      likeCountElement.innerHTML = likes[counter];
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    var counter = 0;
    var timerElement = document.getElementById("timer");
    var incrementButton = document.getElementById("increment");
    var decrementButton = document.getElementById("decrement");
    var likeButton = document.getElementById("like");
    var likeCountElement = document.getElementById("like-count");
    var pauseButton = document.getElementById("pause");
    var restartButton = document.getElementById("restart");
  })