var  game = {
       wins : 0,
       loss : 0,
       totalScore : 0,
       message : null,
       randomNumber: null,

// Start /Restart game
 startGame: function(){
	
	// Generator for random numbers and value of crystls 
	var crys1 = Math.floor(Math.random() * 12) + 1
	$("#amberCrystal").attr("value",crys1);

	var crys2 = Math.floor(Math.random() * 12) + 1
	$("#blueCrystal").attr("value",crys2);

	var crys3 = Math.floor(Math.random() * 12) + 1
	$("#greenCrystal").attr("value",crys3);

	var crys4 = Math.floor(Math.random() * 12) + 1
	$("#redCrystal").attr("value",crys4);

    // Generator for random computer number
     game.randomNumber = Math.floor(Math.random() * 102) + 19
    $("#random").html(game.randomNumber);
    $("#total-score").html(this.totalScore);
    this.totalScore = 0

},


// Updating the score board/
updateScore: function(){

    
	var newElement = $("<span class='new-element')>" + game.message + "</span>");
    var scores = "<br><br>Win : " + game.wins + "<br>Loss : " + game.loss;	


// Display score and message
    $("#score").html(scores);
    $("#score").prepend(newElement);



},




setScore: function(){

	console.log(this);
	if(this.totalScore === this.randomNumber){
		this.wins++;
		this.message = "YOU WON!";
		this.updateScore();
		this.startGame();
	}

     if (this.totalScore > this.randomNumber) {
     	this.loss++;
     	this.message = "YOU LOST!";
     	this.updateScore();
     	this.startGame();
     }
  }


};

 // playing the game
$(document).ready(function (){

	game.startGame();


     // button functions
	$(".crystal").on("click", function(){
		game.totalScore = game.totalScore + parseInt($(this).attr("value"));
		$("#total-score").html(game.totalScore)
		console.log("score" + game.totalScore)
		console.log("random" + game.randomNumber)
		game.setScore();
	   
    });

});



   















