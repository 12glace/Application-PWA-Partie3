const questions = [
   {
      img: './img/question1.jpg',
      question: 'What is this creature?',
      answers: ['toad', 'pepe the frog', 'frog', 'your mum'],
      correct: 1,
   },
   {
      img: './img/question2.jpg',
      question: 'Is the dab dead?',
      answers: ['yes', 'yes', 'yes', 'no'],
      correct: 3,
   },
   {
      img: './img/question3.jpg',
      question: 'Who is this famous person?',
      answers: ['Ugandan knuckles', 'ur mum is gay', 'fortnite balls', 'sonic'],
      correct: 0,
   },
   {
      img: './img/question4.jpg',
      question: 'Wuts 9 + 10? ',
      answers: ['69', '19', '21', '24'],
      correct: 2,
   },
   {
      img: './img/question5.jpg',
      question: 'What is the following sentence to "I\'m already Tracer?" ',
      answers: ['What about your mum?', 'What about tracer?', 'What about Widowmaker?', 'What about your dad?'],
      correct: 2,
   },
];
const startBtn = document.querySelector('.start');
const nextBtn = document.querySelector('.button_question');
const questionsContainer = document.querySelector('.container');
const finishWindow = document.querySelector('.end');
const finishText = document.querySelector('.end_text');
const finishButton = document.querySelector('.end_button');
const startMenu = document.querySelector('.intro');
const quizMenu = document.querySelector('.questions');
const questionsNumber = document.querySelector('.total-number');
const questionsImage = document.querySelector('.image_question');
const questionsQuestion = document.querySelector('.question');
const questionsAnswers = document.querySelector('.answers');
let availableQuestions = [];
let availableOption = [];
let currentQuestion;
let correctAnswer = 0;
let questionsCounter = 0;
const setAvailableQuestions = () => {
   questions.forEach( item => {
      availableQuestions.push(item);
   })
};

const getAvailableQuestions = () => {
   questionsNumber.textContent = `Questions ${questionsCounter + 1} of ${questions.length}`;
   const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
   currentQuestion = questionIndex;
   questionsQuestion.innerHTML = currentQuestion.question;

   questionsImage.innerHTML = `<img src=${currentQuestion.img} alt=${Image}>`

   const numberOfQuestions = availableQuestions.indexOf(questionIndex);
   availableQuestions.splice(numberOfQuestions, 1);

   const optionLength = currentQuestion.answers.length;
   for(let i = 0; i < optionLength; i++ ) {
      availableOption.push(i)
   };

   questionsAnswers.innerHTML = '';
   
   for(let i = 0; i < optionLength; i++ ) {
      const optionIndex = availableOption[Math.floor(Math.random() * availableOption.length)];
      const numberOfoption = availableOption.indexOf(optionIndex);
      availableOption.splice(numberOfoption, 1);
      const option = document.createElement('div');
      option.innerHTML = currentQuestion.answers[optionIndex];
      option.id = optionIndex;
      option.className = ('answer');
      questionsAnswers.appendChild(option);
      option.setAttribute('onclick', 'getresult(this)');
   };

   questionsCounter++;
};

const getresult = (element) => {
   const id = parseInt(element.id);
   const correct = currentQuestion.correct;
   questionsAnswers.classList.add('disable')
   if (id === correct) {
      element.classList.add('correct')
      correctAnswer++;
   } else {
      element.classList.add('wrong')
   }
}
startBtn.addEventListener('click', function() {
   startMenu.style.display = 'none';
   quizMenu.style.display = 'flex';
   setAvailableQuestions();
   getAvailableQuestions();
});
nextBtn.addEventListener('click',function(){
   if (questionsCounter == questions.length) {
      quizMenu.style.display = 'none';
      finishWindow.style.display = 'flex';
      finishText.textContent = `YAYYYYYYY! YOU GOT ${correctAnswer} of ${questions.length}`
   } else {
      if (questionsAnswers.classList.contains('disable')) {
         getAvailableQuestions();
         questionsAnswers.classList.remove('disable')
      } else {
         alert('choose an answer you idiot !😡😡😡😡😡😡')
      }
   }
});
finishButton.addEventListener('click', function() {
   window.location.reload();
})