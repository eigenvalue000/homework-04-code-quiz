// Questions and answers obtained from tutorialspoint.com
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    },
    {
      title: "Which of the following is an advantage of using JavaScript?",
      choices: ["Less server interaction", "Immediate feedback to visitors", 
      "Increased interactivity", "All of the above"],
      answer: "All of the above"
    },
    {
      title: "Which of the following type of variable is visible everywhere in your JavaScript code?",
      choices: ["Gobal variable", "Local variable", "Both of the above", "None of the above"],
      answer: "Gobal variable"
    },
    {
      title: "Which built-in method combines the text of two strings and returns a new string?",
      choices: ["append()", "concat()", "attach()", "None of the above"],
      answer: "concat()"
    },
    {
      title: "Which of the following code creates an object?",
      choices: ["var book = Object();", "var book = new Object();", "var book = new OBJECT();", "var book = new Book();"],
      answer: "var book = new Object();"
    },
    {
      title: "Which of the following function of Number object returns a string value version of the current number?",
      choices: ["toString()", "toFixed()", "toLocaleString()", "toPrecision()"],
      answer: "toString()"
    },
    {
      title: "Which of the following function of String object returns the characters in a string between two indexes into the string?",
      choices: ['slice()', 'split()', 'substr()', 'substring()'],
      answer: 'substring()'
    },
    {
      title: "Which of the following function of String object creates a string to be displayed as bold as if it were in a <b> tag?",
      choices: ['anchor()', 'big()', 'blink()', 'bold()'],
      answer: 'bold()'
    },
    {
      title: "Which of the following functions of the Array object returns a new array comprised of this array joined with other array(s) and/or value(s)?",
      choices: ['concat()', 'pop()', 'push()', 'some()'],
      answer: 'concat()'
    },
    {
      title: "Which of the following function of Array object joins all elements of an array into a string?",
      choices: ['concat()', 'join()', 'pop()', 'map()'],
      answer: 'join()'
    },
    {
      title: "Which of the following function of Array object extracts a section of an array and returns a new array?",
      choices: ['reverse()', 'shift()', 'slice()', 'some()'],
      answer: 'slice()'
    }
];

var index = 0;
function generateQuestion(index) {
    if (index < questions.length) {
        var randomQuestion = questions[index];
        var title = document.querySelector('.question');
        var choices = document.querySelector('.choices ul');
        var answer = document.querySelector('.answer');

        title.textContent = randomQuestion.title;
        choices.innerHTML = randomQuestion.choices.map(choice => `<button>${choice}</button>`).join('');
        document.body.children[0].children[1].children[2].children[0].children[0].setAttribute('class', 'button1');
        document.body.children[0].children[1].children[2].children[0].children[1].setAttribute('class', 'button2');
        document.body.children[0].children[1].children[2].children[0].children[2].setAttribute('class', 'button3');
        document.body.children[0].children[1].children[2].children[0].children[3].setAttribute('class', 'button4');
        //answer.textContent = randomQuestion.answer;
        index++;
        
    } else {
        alert('Quiz Complete');
    }
    
}

// Timer
var timeEl = document.querySelector(".time");
const totalTime = 10;
var secondsLeft = totalTime;
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        document.querySelector('.quiz').classList.toggle('hidden');
        document.querySelector('.game-over').classList.toggle('hidden');
        secondsLeft = totalTime;
      }
  
    }, 1000);
}

document.querySelector('.start-button').addEventListener('click', function() {
    document.querySelector('.intro').classList.toggle('hidden');
    document.querySelector('.quiz').classList.toggle('hidden');
    document.querySelector('.button1').classList.toggle('hidden');
    document.querySelector('.button2').classList.toggle('hidden');
    document.querySelector('.button3').classList.toggle('hidden');
    document.querySelector('.button4').classList.toggle('hidden');
    setTime();
    generateQuestion(index);
});

document.querySelector('.reset-button').addEventListener('click', function() {
    document.querySelector('.intro').classList.toggle('hidden');
    document.querySelector('.game-over').classList.toggle('hidden');
    
});

document.querySelector('.button1').addEventListener('click', function() {
    document.body.children[0].children[1].children[2].children[0].children[0].querySelector('.button1').classList.toggle('hidden');
})


