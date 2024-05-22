var timer = 60;
var score = 0;
var countdown = document.getElementById('countdown');
var scoreDisplay = document.getElementById('score');
var questions = document.getElementsByClassName('question');
var interval;

// Timer function
function startTimer() {
  interval = setInterval(function() {
    timer--;
    countdown.textContent = timer;
    if (timer <= 0) {
      clearInterval(interval);
      alert('Time is up! Your final score is: ' + score);
      disableInputs();
    }
  }, 1000);
}

// Function to calculate score
function calculateScore() {
  score = 0;
  for (var i = 0; i < questions.length; i++) {
    var radios = questions[i].querySelectorAll('input[type=radio]');
    for (var j = 0; j < radios.length; j++) {
      if (radios[j].checked && radios[j].value === 'Peter Drucker') {
        score++;
      }
      if (radios[j].checked && radios[j].value === 'Using personal savings and revenues to fund the startup') {
        score++;
      }
    }
  }
  scoreDisplay.textContent = 'Score: ' + score;
}

// Function to submit quiz
function submitQuiz() {
  calculateScore();
  clearInterval(interval);
  disableInputs();
  alert('Quiz submitted! Your final score is: ' + score);
}

// Function to disable inputs after submission
function disableInputs() {
  var inputs = document.querySelectorAll('input[type=radio]');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }
}

// Function to open modal
function openModal() {
  document.getElementById('startModal').style.display = 'flex';
  document.getElementById('content').classList.add('hidden');
}

// Function to close modal
function closeModal() {
  document.getElementById('startModal').style.display = 'none';
}

// Function to start quiz
function startQuiz() {
  closeModal();
  document.getElementById('content').classList.remove('hidden');
  startTimer();
}

// Open modal when the page loads
window.onload = function() {
  openModal();
};
