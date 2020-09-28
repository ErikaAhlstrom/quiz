class Game {
    constructor() {
        
        this.current_question = 1;
        this.next_button = document.getElementById("next_button"); 
        this.next_button.addEventListener("click", function(e) {
            e.preventDefault();
            console.log(game.current_question);
            this.current_question = 2;
                
        })
    
        
    }
}