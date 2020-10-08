class QuizItem {
    constructor(quiz_item) {
        // Mall för varje quiz item i APIt.
        this.question = quiz_item.question;
        this.answers = quiz_item.answers;
        this.correct_answers = quiz_item.correct_answers;
    }
    // Skriver ut frågan i DOMen.
    printCurrentQuestion() {
        let questionsContainer = document.getElementById("question-container");
        questionsContainer.classList.remove("hide");
        let questionElement = document.getElementById("question");
        questionElement.textContent = this.question;
    }
    // Skriver ut svaren i DOMen.
    printCurrentAnswers() {
        // Filtreara bort null answers så de inte skrivs ut.
        let answers_all = Object.values(this.answers);
        let answers = answers_all.filter(answer => answer != null);

        // Sätter class clicked på användarens svar för att sedan kunna gämföra
        // användarens svar med dom rätta svaren.
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
    // Rensa gamla svar när ny fråga skrivs ut
    clearAnswers() {
        let answerButtonsElement = document.getElementById("answer-buttons");
        while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);

        }
    }
    // Rensa gammal fråga när ny fråga skrivs ut
    clearQuestion() {
        let question = document.getElementById("question");
        let question_counter = document.getElementById("question-header");
        question_counter.innerHTML = "";
        question.innerHTML = "";
    }
}