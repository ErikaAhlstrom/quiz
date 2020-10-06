class QuizItem {
    constructor(quiz_item) {

        //this.id = quiz_item.id;
        this.question = quiz_item.question;
        this.description = quiz_item.description;
        this.answers = quiz_item.answers;
        this.correct_answers = quiz_item.correct_answers;

    }

    printCurrentQuestion() {
        let questionsContainer = document.getElementById("question-container");
        questionsContainer.classList.remove("hide");
        let questionElement = document.getElementById("question");
        questionElement.textContent = this.question;
    }
    
    printCurrentAnswers() {
        let answers_all = Object.values(this.answers);
        let answers = answers_all.filter(answer => answer != null);

        for (let i = 0; i < answers.length; i++) {
            let button = document.createElement("button");
            let answerButtonsElement = document.getElementById("answer-buttons");
            button.innerText = answers[i];
            button.classList.add("btn", "current-btns");
            answerButtonsElement.appendChild(button);

            button.addEventListener("click", function(e){
 
                if (e.target.classList.contains("clicked")) {
                    e.target.classList.remove("clicked");
      
                } else {
                    e.target.classList.add("clicked");
                }
            });
        }
    }

    clearAnswers() {
        let answerButtonsElement = document.getElementById("answer-buttons");
        while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);

        }
    }

    clearQuestion() {
        let question = document.getElementById("question");
        let question_counter = document.getElementById("question-header");
        question_counter.innerHTML = "";
        question.innerHTML = "";
    }
}