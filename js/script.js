document.addEventListener('DOMContentLoaded', function() {


    let game = new Game();
    let player = new Player();
    let questions = new Questions();
    let answers = new Answers();
    let layout = new Layout();

    layout.displayQuestion();

    document.getElementById("next_button").addEventListener("click", function(e){
        
        e.preventDefault();
        layout.nextQuestion()
    })


    
})