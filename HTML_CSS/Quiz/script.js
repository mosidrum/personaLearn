
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');

let shuffledQuestions,currentQuestionIndex;
let quizeScore = 0;


startButton.addEventListener('click', startGame);

nextButton.addEventListener('click',() =>{
    currentQuestionIndex++;
    setnextQuestion();
});

function startGame(){
    startButton.classList.add('hide');
    shuffledQuestions=questions.sort(() =>Math.random() -0.5);
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide');
    setnextQuestion();
    quizeScore=0;
}

function setnextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText= question.question;
    question.answers.forEach((answer) =>{
        const button =document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct =answer.correct;
        }
        button.addEventListener('click',selectAnswer);
        answerButtonElement.appendChild(button);
    })
}


function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton=e.target;
    const correct =selectedButton.dataset.correct;

    setStatusClass(document.body,correct);
    Array.from(answerButtonsElements.children).forEach((button)=>{
        setStatusClass(button,button.dataset.correct);
    });
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide");
    }else{
        startButton.innerText ="restart";
        startButton.classList.remove("hide");
    }
    if (selectedButton.dataset =correct){
        quizeScore++;
    }
    document.getElementById('right-answer').innerText=quizeScore;
}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add("correct");
    }else {
        element.classList.add("wrong");
    }
}




function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');

}

const questions = [
    {
        question: 'Which of one of this is a javascript framework?',
        answers :[
            {text: 'Python', correct: false},
            {text: 'Django', correct: false},
            {text: 'React', correct: true},
            {text: 'Eclipse', correct: false},
        ],
    },
    {
        question: 'Who is the president of Nigeria?',
        answers :[
            {text: 'Peter Obi', correct: false},
            {text: 'Mohammed Buhari', correct: true},
            {text: 'Atiku Abubakar', correct: false},
            {text: 'Bola Tinubu', correct: false},
        ],
    },
    {
        question: '1 multiply by 0 is?',
        answers :[
            {text: '0', correct: true},
            {text: '1', correct: false},

        ],
    },
    {
        question: 'who is the owner of chelsea?',
        answers :[
            {text: 'Abrahmovic', correct: false},
            {text: 'Todd Burley', correct: true},

        ],
    },
]