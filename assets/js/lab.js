// function createQuiz(quizs) {
//   console.log(quizs.topic.tpc_1);
//   quizs.topic.tpc_1.quiz.map(function(quiz) {
//     var topic = document.createElement("div");
//     topic.classList.add("topic");
//     topic.innerHTML = quiz.quiz_name;

//     document.getElementById("app").appendChild(topic);
//   });
// }

// function getQuiz() {
//   var http = new XMLHttpRequest();

//   http.onreadystatechange = function() {
//     if (http.readyState === 4 && http.status === 200) {
//       createQuiz(JSON.parse(http.response));
//     }
//   };
//   http.open("GET", "quiz.json", true);
//   http.send();
// }

// var quiz = getQuiz();
// console.log(quiz);

let parser = new DOMParser();
let doc = parser.parseFromString(`<div id="testo">kdjf</div>`, "text/html");
let pDom = doc.getElementById("testo");

document.getElementById("demo").appendChild(pDom);
console.log(pDom);
