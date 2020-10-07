class Game {
    constructor(quiz_items) {
        // Egenskaper 
        this.current_question = 0;
        
        // Underklasser
        this.player = new Player();
        this.player.name;
        this.player.score = 0;
        this.player.max_questions = 10;

        this.quiz_items = [];
        for (let quiz_item of quiz_items) {
            this.quiz_items.push(new QuizItem(quiz_item));
        } 

        // Aktivera Knappar
        this.startButton();
        this.nextButton();
        this.playAgainButton();

        // Starta metoder
        this.checkNumberOfQuestions();

        // DOM Element
        this.start_button;
        this.play_again_button;
        this.next_button;
        this.quiz_header;
        this.start_container;
        this.game_container;
        this.question_counter;
        this.answerButtonsElement;
        this.questionsContainer;
        this.number_of_questions;
    }


/* ================================================================================== //
    START BUTTON CLICK, SPARAR USER NAME, STARTAR SPEL
// ================================================================================== */

    startButton() {
        this.start_button = document.getElementById("start_btn");
        this.start_button.addEventListener("click", (e) => {
            this.player.saveName();
            this.playGame()
        })
    }
/* ================================================================================== //
    NEXT BUTTON CLICK, SKRIV UT NYTT QUIZ ITEM, HÅLLER RÄKNINGEN PÅ FRÅGORNA
// ================================================================================== */

    nextButton() {
        this.next_button = document.getElementById("next-btn");
        this.next_button.addEventListener("click", (e) => {
            console.log("NEXT BUTTON");
            this.getCorrectAnswers();    
            console.log("current score = " + this.player.score);  

            if (this.current_question < this.player.max_questions - 1) {
                this.quiz_items[this.current_question].clearAnswers();
                this.current_question++
                this.question_counter.innerHTML = "Q nr: " + (this.current_question + 1);
                this.quiz_items[this.current_question].printCurrentAnswers();
                this.quiz_items[this.current_question].printCurrentQuestion();
                console.log(this.current_question);

            }
            else if (this.current_question == this.player.max_questions - 1) {
                this.endGame();
                this.quiz_items[this.current_question].clearAnswers();
                this.quiz_items[this.current_question].clearQuestion();   
            } 
        });
    }

/* ================================================================================== //
    PLAY AGAIN BUTTON CLICK, LADDAR OM SIDAN FÖR ATT SPELA IGEN
// ================================================================================== */      

    playAgainButton() {
        this.play_again_button = document.getElementById("play-again-btn");
        this.play_again_button.addEventListener("click", (e) => {
            //quiz.playGame();
            location.reload();
        });
    }
    
    // 
    playGame() {
        this.quiz_header = document.getElementById("quiz-header");
        this.start_container = document.getElementById("startContainer");
        this.game_container = document.getElementById("gameContainer");
        this.question_counter = document.getElementById("question-header");

        this.game_container.classList.remove("hide");
        this.start_container.classList.add("hide");
        this.question_counter.innerHTML = "Q nr: 1"
        this.quiz_header.innerHTML = "QUIZ";
        this.play_again_button.classList.add("hide");

        this.current_question = 0;
        this.quiz_items[this.current_question].printCurrentAnswers();
        this.quiz_items[this.current_question].printCurrentQuestion();
    }

    endGame() {
        this.questionsContainer = document.getElementById("question-container")
        this.play_again_button.classList.remove("hide");
        this.next_button.classList.add("hide");
        this.quiz_header.innerHTML = this.player.name + "'s Score: " + this.player.score;
        this.question_counter.innerHTML = "";
    }


    checkNumberOfQuestions() {
        this.number_of_questions = document.getElementById("numberOfQuestions");
        this.number_of_questions.addEventListener("click", (e) => {
            this.player.calcMaxQuestions(e);
        });  
    }


    getCorrectAnswers() {
        let answer_buttons = Array.from(document.getElementsByClassName("current-btns"));
        let user_answers = [];

        for (let i = 0; i < answer_buttons.length; i++) {
            if (answer_buttons[i].classList.contains("clicked")) {
                user_answers[i] = "true";
        
            } else {
                user_answers[i] = "false";
            }        
        } 

        let correct_answers = Object.values(this.quiz_items[this.current_question].correct_answers);
        this.player.getCorrectScore(user_answers, correct_answers);
    }

}