document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('question1').classList.add('active');
});

let currentQuestion = 1;

function nextQuestion(questionNumber, answer) {
  document.getElementById(`question${questionNumber}`).classList.remove('active');
  if (questionNumber < 5) {
    currentQuestion++;
    document.getElementById(`question${questionNumber + 1}`).classList.add('active');
  } else {
    showResults();
  }
}

function wrongAnswer(questionNumber) {
  currentQuestion = questionNumber;
  window.location.href = 'wrongtulip.html';
}

function showResults() {
  document.getElementById('questionnaire').style.display = 'none';
  const result = `
  
  <html>
  <head>
    <meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,
	initial-scale=1.0">
	<Link rel="stylesheet" href="tulip.css">
  </head>
  <body>
    <div class="container">
	     <div class="crushback">
		    <div class="envelope">
			  <div class="card">
			    <div class="text">
				   <br> I just wanna say, <br> ily crushback monako <3
			  </div>
			   <div class="heart"></div>
			</div>
			<div class="front"></div>
	   </div>
	</div>
  `;
  document.getElementById('result').innerHTML = result;
}

function moveNoButton() {
  const noButton = document.getElementById('noButton');
  const randomX = Math.floor(Math.random() * 80) + 10;
  const randomY = Math.floor(Math.random() * 80) + 10;
  noButton.style.position = 'absolute';
  noButton.style.left = randomX + '%';
  noButton.style.top = randomY + '%';
}
  