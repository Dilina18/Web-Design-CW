/* Functions Begin From Here>>>>>>>>>>>> */

/* Start Quiz Function */
function startQuiz() {
    document.getElementById("infoContainer").style.display = "none";
    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("backButton").style.display = "none";
    startTimer();
}

/* Submit Quiz Function */
function submitQuiz() {
    checkCompletion("q1");
    checkCompletion("q2");
    checkCompletion("q3");
    checkCompletion("q4");
    checkCompletion("q5");
    checkCompletion("q6");
    checkCompletion("q7");
    checkCompletion("q8");
    checkCompletion("q9");
    checkCompletion("q10");

    if (completed > 0 && timeLeft > 0){
        alert("You Have Unanswered questions");
        backTop();
        completed = 0;
        score = 0;
        correctAnswers = 0;
        wrongAnswers = 0;
    } else {
        document.getElementById("header").style.display = "none";
        document.getElementById("questionContainer").style.display = "none";
        document.getElementById("resultContainer").style.display = "block";
        document.getElementById("timeTaken").innerHTML= counter;
        /* Get Radio Value For All Questions */
        getRadioValue("q1", "question1");
        getRadioValue("q2", "question2");
        getRadioValue("q3", "question3");
        getRadioValue("q4", "question4");
        getRadioValue("q5", "question5");
        getRadioValue("q6", "question6");
        getRadioValue("q7", "question7");
        getRadioValue("q8", "question8");
        getRadioValue("q9", "question9");
        getRadioValue("q10", "question10");
        getResults();
        done = true;
    }
}

/* Return to Results Page */
function goBack() {
    document.getElementById("header").style.display = "none";
    document.getElementById("questionContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";
}

let completed = 0;

/* Check if All Questions Answered */
function checkCompletion(questionNum) {
    let answer = document.getElementsByName(questionNum);

    for(let i = 0; i < answer.length; i++) {
        if (answer[0].checked === false && answer[1].checked === false && answer[2].checked === false && answer[3].checked === false ) {
            completed += 1;
        }
    }
}

/* Check Answers Function */
function checkAnswers() {
    done = true;
    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("resultContainer").style.display = "none";
    document.getElementById("submitButton").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("movieTrivia").style.display = "block";
    document.getElementById("backButton").style.display = "block";
}

let timeLeft;
let done = false;
let counter = 0;

/* Start Timer Function */
function startTimer() {
    timeLeft =60;
    let downloadTimer = setInterval(function () {
        if (timeLeft <= 0 && done === false) {
            clearInterval(downloadTimer);
            alert("Time is Up!");
            counter = 60;
            submitQuiz();
        }
        counter = 60 - timeLeft;
        document.getElementById("progressBar").value = counter;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        document.getElementById("timer2s").innerHTML = timeLeft;
        timeLeft -= 1;
    }, 1000);
}

let score = 0, correctAnswers = 0, wrongAnswers = 0;

/* Get Radio Value Function */
function getRadioValue(questionNum, queNum) {
    let answer = document.getElementsByName(questionNum);

    for(let i = 0; i < answer.length; i++) {
        if(answer[i].checked){
            if (answer[i].value === "1"){
                score += 2;
                correctAnswers += 1;
                document.getElementById(queNum).style.backgroundColor = "#2dbf24";

            } else if (answer[i].value === "0") {
                score -= 1;
                wrongAnswers += 1;
                document.getElementById(queNum).style.backgroundColor = "#ff2727";
                document.getElementById(questionNum).style.backgroundColor = "#2dbf24";
            }
        }
    }
}

/* Get Results Function */
function getResults(){
    if (score < 0){
        score = 0;
    }
    document.getElementById("score").innerHTML = ' You Scored ' + score + ' points.';
    if (correctAnswers >= 7){
        document.getElementById("scoreTag").innerHTML = ' Congrats!, You answered ' + correctAnswers + ' out of 10 questions.';
        document.getElementById("body").style.backgroundColor = "green";
    }
    else if(correctAnswers >= 4 && correctAnswers < 7){
        document.getElementById("scoreTag").innerHTML = ' Nice! You answered ' + correctAnswers + ' out of 10 questions.';
        document.getElementById("body").style.backgroundColor = "yellow";
    }
    else{
        document.getElementById("scoreTag").innerHTML = ' Sorry! You answered ' + correctAnswers + ' out of 10 questions.';
        document.getElementById("body").style.backgroundColor = "red";
    }
}

/* Back To Top Function */
function backTop(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
}

/* Restart Quiz Function */
function restartQuiz(){
    window.location.reload();
}
