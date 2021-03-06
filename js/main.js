window.addEventListener('DOMContentLoaded', function(e){

/*     let data = [{"id":995,"question":"Which operator is used to assign a value to a variable?","description":null,"answers":{"answer_a":"x","answer_b":"-","answer_c":"=","answer_d":"*","answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"false","answer_c_correct":"true","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"JavaScript"}],"category":"Code","difficulty":"Easy"},{"id":981,"question":"How to write an IF statement in JavaScript?","description":null,"answers":{"answer_a":"if i = 5 then","answer_b":"if i = 5","answer_c":"if i == 5 then","answer_d":"if (i == 5)","answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"false","answer_c_correct":"false","answer_d_correct":"true","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"JavaScript"}],"category":"Code","difficulty":"Easy"},{"id":990,"question":"What is the correct JavaScript syntax for opening a new window called \"w2\" ?","description":null,"answers":{"answer_a":"w2 = window.new(\"http:\/\/www.w3schools.com\");","answer_b":"w2 = window.open(\"http:\/\/www.w3schools.com\");","answer_c":null,"answer_d":null,"answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"true","answer_c_correct":"false","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"JavaScript"}],"category":"Code","difficulty":"Easy"},{"id":977,"question":"The external JavaScript file must contain the <script> tag.","description":null,"answers":{"answer_a":"True","answer_b":"False","answer_c":null,"answer_d":null,"answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"true","answer_c_correct":"false","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"JavaScript"}],"category":"Code","difficulty":"Easy"},{"id":978,"question":"How do you write \"Hello World\" in an alert box?","description":null,"answers":{"answer_a":"msgBox(\"Hello World\");","answer_b":"alert(\"Hello World\");","answer_c":"msg(\"Hello World\");","answer_d":"alertBox(\"Hello World\");","answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"true","answer_c_correct":"false","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"JavaScript"}],"category":"Code","difficulty":"Easy"},{"id":985,"question":"How can you add a comment in a JavaScript?","description":null,"answers":{"answer_a":"\/\/This is a comment","answer_b":"'This is a comment","answer_c":"<!--This is a comment-->","answer_d":null,"answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"true","answer_b_correct":"false","answer_c_correct":"false","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"JavaScript"}],"category":"Code","difficulty":"Easy"},{"id":986,"question":"How to insert a comment that has more than one line?","description":null,"answers":{"answer_a":"\/*This comment has more than one line*\/","answer_b":"<!--This comment has more than one line-->","answer_c":"\/\/This comment has more than one line\/\/","answer_d":null,"answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"true","answer_b_correct":"false","answer_c_correct":"false","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"JavaScript"}],"category":"Code","difficulty":"Easy"},{"id":979,"question":"How do you create a function in JavaScript?","description":null,"answers":{"answer_a":"function myFunction()","answer_b":"function:myFunction()","answer_c":"function = myFunction()","answer_d":null,"answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"true","answer_b_correct":"false","answer_c_correct":"false","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"JavaScript"}],"category":"Code","difficulty":"Easy"},{"id":987,"question":"What is the correct way to write a JavaScript array?","description":null,"answers":{"answer_a":"var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")","answer_b":"var colors = \"red\", \"green\", \"blue\"","answer_c":"var colors = [\"red\", \"green\", \"blue\"]","answer_d":"var colors = (1:\"red\", 2:\"green\", 3:\"blue\")","answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"false","answer_b_correct":"false","answer_c_correct":"true","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"JavaScript"}],"category":"Code","difficulty":"Easy"},{"id":996,"question":"What will the following code return: Boolean(10 > 9)","description":null,"answers":{"answer_a":"true","answer_b":"NaN","answer_c":"false","answer_d":null,"answer_e":null,"answer_f":null},"multiple_correct_answers":"false","correct_answers":{"answer_a_correct":"true","answer_b_correct":"false","answer_c_correct":"false","answer_d_correct":"false","answer_e_correct":"false","answer_f_correct":"false"},"correct_answer":"answer_a","explanation":null,"tip":null,"tags":[{"name":"JavaScript"}],"category":"Code","difficulty":"Easy"}]
    let quiz = new Quiz(data);  */

    fetch("https://quizapi.io/api/v1/questions?apiKey=mK0SPtcOzyhQODarlNLDzoZOUogQMh5IenMC945k&category=code&difficulty=Easy&limit=10")
    .then(response => response.json())
    .then(data => {
        let game = new Game(data);
        console.log(data);
    })  

})




/*===========================================
                    TO DO
(x) Spelaren måste fylla i namn, annars alert
(x) Fixa bugg när man klickar ur en number of questions knapp
( ) Ge felmeddelande om API inte kunde hämtas
(x) Går så inte hela number-of-questions är klickbar, bara knappar
( ) Snyggare sätt att starta om spelet 
( ) Gör quiz header lika bred som game container

===========================================*/








