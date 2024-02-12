const quizdata =[
    {
        question: "Why is it important to have the right of protection?",
        a: "So you can do whatever you want without rules",
        b: "So you can stay safe from bad things and feel happy",
        c: "So you can watch TV all day long",
        d: "Eating your favorite snacks whenever you want",
        correct: "b",
    },
    {
        question: "What does the right to health mean?",
        a: "Playing video games all day",
        b: "So you can eat as much junk food as you wan",
        c: "Being able to see a doctor when you are sick",
        d: "So you can stay up late watching TV",
        correct: "c",
    },
    {
        question: "If riya parents are not allowing her to go to schooll. What right does riya have?",
        a: "Right to stay up late watching TV",
        b: "Right to protection",
        c: "Right to play all day",
        d: "Right to Education",
        correct: "d",
    },
    {
        question: "What should you do if you see someone being treated unfairly?",
        a: "Tell an adult and stand up for the person being treated unfairly",
        b: "Laugh and join in with the others",
        c: "Inviting everyone there",
        d: "Ignore what's happening and walk away",
        correct: "a",
    },
    {
        question: "How can you express yourself?",
        a: "By talking, drawing, writing, singing, or dancing",
        b: "By ignoring everyone and never saying anything",
        c: "By shouting and making loud noises",
        d: "Ignore them and do whatever you want",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz()

 function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
 }

 function deselectAnswers(){
    answerEls.forEach(answerEls => answerEls.check = false)
 }

  function getSelected(){
    let answerEls
     answerEls.forEach(answerEls => {
        if(answerEls.checked) {
            answer = answerEls.id
        }
     })
     return answer
  }

  submitBtn