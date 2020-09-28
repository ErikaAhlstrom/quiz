

class Layout {
    constructor(current_question) {
        this.question1_div = document.getElementById("question1_div");
        this.question2_div = document.getElementById("question2_div");
        this.question3_div = document.getElementById("question3_div");

        this.next_button = document.getElementById("next_button");
        this.prev_button = document.getElementById("prev_button");


       


    }
    displayQuestion(current_question) {
        
        let question_div_arr = document.getElementsByClassName("question_div");

        for (let i = 0; i < question_div_arr.length; i++){
            if (i == (current_question - 1)) {
                question_div_arr[i].style.display = "";
            }  else {
                question_div_arr[i].style.display = "none";
            }
        }

    }    
}

     
