var startButtonEl = document.querySelector("#start-button");
var cardContainerEl = document.querySelector("card-container");
var timeEl = document.querySelector(".time");
var secondsLeft = 15+1;

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
    // Start the timer
    setTime();
    // Loop through all of the questions
    i = 0;
    generateQuestion(i);
    
    
}

function generateQuestion(questionIndex) {
    // Create the question content
    var tagQuestion = document.createElement('div');
    tagQuestion.textContent = questionsArray[questionIndex];
    document.body.children[1].children[1].appendChild(tagQuestion);

    // Create the answer buttons with text
    var answer1 = document.createElement('button');
    answer1.setAttribute('id', 'button1');
    answer1.innerHTML = answersArray[questionIndex][0];
    document.body.children[1].children[1].appendChild(answer1);
    var answer2 = document.createElement('button');
    answer2.setAttribute('id', 'button2');
    answer2.innerHTML = answersArray[questionIndex][1];
    document.body.children[1].children[1].appendChild(answer2);
    var answer3 = document.createElement('button');
    answer3.setAttribute('id', 'button3');
    answer3.innerHTML = answersArray[questionIndex][2];
    document.body.children[1].children[1].appendChild(answer3);
    var answer4 = document.createElement('button');
    answer4.setAttribute('id', 'button4');
    answer4.innerHTML = answersArray[questionIndex][3];
    document.body.children[1].children[1].appendChild(answer4);

    // Add event listeners to each button
    // If a button is pressed, the question should dissapear
    // After the question dissappears, a new question should appear
    var button1El = document.querySelector('#button1');
    button1El.addEventListener('click', function(){
        console.log('button1 pressed')
        var y = document.getElementById('question').style.display = 'none';
    })
    var button2El = document.querySelector('#button2');
    button2El.addEventListener('click', function(){
        console.log('button2 pressed')
        var y = document.getElementById('question').style.display = 'none';
    })
    var button3El = document.querySelector('#button3');
    button3El.addEventListener('click', function(){
        console.log('button3 pressed')
        var y = document.getElementById('question').style.display = 'none';
    })
    var button4El = document.querySelector('#button4');
    button4El.addEventListener('click', function(){
        console.log('button4 pressed')
        var y = document.getElementById('question').style.display = 'none';
    })
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


