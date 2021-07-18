var startButtonEl = document.querySelector("#start-button");
var cardContainerEl = document.querySelector("card-container");
// cardContainerEl.style.display = "none";

startButtonEl.addEventListener("click", function() {
    var x = document.getElementById("header");
    x.style.display = "none";
    var y = document.getElementById("card-container");
    y.style.display = "block";
});


