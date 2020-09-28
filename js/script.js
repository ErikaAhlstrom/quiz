document.addEventListener('DOMContentLoaded', function() {


    let game = new Game();
    let player = new Player();
    let questions = new Questions();
    let answers = new Answers();
    let layout = new Layout(game.current_question);

    layout.displayQuestion(game.current_question);





    
})