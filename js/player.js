class Player {
    constructor() {
        this.name;
        this.score;
    }

    printName() {
        console.log(this.name);
    }

    printScore() {
        console.log(this.score);
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

        let picked_value = Number(document.querySelector(".start_clicked").innerHTML);
        //this.max_questions = picked_value;

        return picked_value;
    }


}
