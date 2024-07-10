// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var Question;
var Question1;
var Question2;
var Question3; 
var showQuestion;
 Question1 = {
    question: "What is the capital of France?",
    options: ["A: Berlin", "B: Madrid", "C: Paris", "D: Rome"],
    correctAnswer: "C: Paris"
};

Question2 = {
    question: "Which planet is known as the Red Planet?",
    options: ["A: Earth", "B: Mars", "C: Jupiter", "D: Venus"],
    correctAnswer: "B: Mars"
};

Question3 = {
    question: "What is the largest ocean on Earth?",
    options: ["A: Atlantic Ocean", "B: Indian Ocean", "C: Arctic Ocean", "D: Pacific Ocean"],
    correctAnswer: "D: Pacific Ocean"
};
showQuestion = function (quizQuestion) {
    console.log("Question: " + quizQuestion.question);
    console.log("------------------------------");
    for (var i = 0; i < quizQuestion.options.length; i++) {
        console.log(quizQuestion.options[i]);
    }
    console.log("------------------------------");
    console.log("Correct Answer: " + quizQuestion.correctAnswer);
    console.log("------------------------------");
};

var quizQuestion;

quizQuestion = Question1;
showQuestion(quizQuestion);

quizQuestion = Question2;
showQuestion(quizQuestion);

quizQuestion = Question3;
showQuestion(quizQuestion);


/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */