var startButtonEl = document.querySelector("#start-button");
var cardContainerEl = document.querySelector("card-container");
var timeEl = document.querySelector(".time");
var secondsLeft = 5+1;
var questionIndex = 0;
// Questions and answers obtained from tutorialspoint.com
// Answers: D, A, B, B, A, D, D, A, B, C
questionsArray = ["Which of the following is an advantage of using JavaScript?",
                  "Which of the following type of variable is visible everywhere in your JavaScript code?",
                  "Which built-in method combines the text of two strings and returns a new string?",
                  "Which of the following code creates an object?"],
                  "Which of the following function of Number object returns a string value version of the current number?",
                  "Which of the following function of String object returns the characters in a string between two indexes into the string?",
                  "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
                  "Which of the following functions of the Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?",
                  "Which of the following function of Array object joins all elements of an array into a string?",
                  "Which of the following function of Array object extracts a section of an array and returns a new array?";
answersArray = [["Less server interaction", "Immediate feedback to visitors", 
                 "Increased interactivity", "All of the above"],
                ["Gobal variable", "Local variable", "Both of the above", "None of the above"],["append()", "concat()", "attach()", "None of the above"],
                ["var book = Object();", "var book = new Object();", "var book = new OBJECT();", "var book = new Book();"],
                ["toString()", "toFixed()", "toLocaleString()", "toPrecision()"],
                ['slice()', 'split()', 'substr()', 'substring()'],
                ['anchor()', 'big()', 'blink()', 'bold()'],
                ['concat()', 'pop()', 'push()', 'some()'],
                ['concat()', 'join()', 'pop()', 'map()'],
                ['reverse()', 'shift()', 'slice()', 'some()'] ];

function init() {
    setTime();
    console.log(generateQuestion(questionIndex));
}

function generateQuestion(questionIndex) {
    return questionIndex;
}

function setTime() {
    //Sets interval in variable
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Timer : " + secondsLeft;

        if (secondsLeft === 0) {
            // Stop timer and clear it
            clearInterval(timerInterval);
            // Initiate gameover function
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    document.getElementById('question').style.display = 'none';
    return;
}

startButtonEl.addEventListener("click", function() {
    var x = document.getElementById("header");
    x.style.display = "none";
    var y = document.getElementById("card-container");
    y.style.display = "block";
    init();
});


