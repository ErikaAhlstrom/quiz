class Player {
    constructor() {
        this.name;
        this.score;
        this.max_questions;
    }

    calcMaxQuestions(e) {

        if(e.target.classList.contains("start_clicked")) {
            e.target.classList.remove("start_clicked");

        } else {
            e.target.classList.add("start_clicked");
        }
       
        let picked_questions = document.getElementsByClassName("start_clicked");
        if(picked_questions.length >1){
            alert("You can only pick one alternative!"); 
            e.target.classList.remove("start_clicked");
        }

        this.max_questions = Number(document.querySelector(".start_clicked").innerHTML);

        //return picked_value;
    }

    saveName() {
        this.name = document.getElementById("nameInput").value;
    }

    getCorrectScore(user_answers, correct_answers) {

        let pop_amount = correct_answers.length - user_answers.length;

        for (let i = 0; i < pop_amount; i++) {
            correct_answers.pop();
        }

        let checked_answers = 0;
        for (let i = 0; i < correct_answers.length; i++) {
            if(correct_answers[i] === user_answers[i]){
                checked_answers++
            } 
        } 

        if (checked_answers === correct_answers.length) {
            this.score++;
        }
    }


}
