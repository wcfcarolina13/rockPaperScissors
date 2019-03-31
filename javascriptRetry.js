let enemyArray = ["rock", "paper", "scissors"];
let game_counter = 0;

const choiceRock = document.getElementById('choice-rock')
choiceRock.innerHTML = choice;

const choicePaper = document.getElementById('choice-paper')
choicePaper.innerHTML = choice;

const choiceScissors = document.getElementById('choice-scissors')
choiceScissors.innerHTML = choice;

function game(choice) {
		let enemy = enemyArray[Math.floor(Math.random() * enemyArray.length)];
		let enemyResult = document.getElementById('result').innerHTML = enemy;

		if (choice = choiceRock) {
			if (enemy == "rock") {
			  console.log("tie");
			} else if (enemy == "paper") {
			  console.log("I win");
			  enemy_count += 1;
			} else if (enemy == "scissors") {
			  console.log("I lose");
			  player_count += 1;
			}
		} else if (choice = choicePaper) {
			if (enemy == "rock") {
		  		console.log("I lose");
		  		player_count += 1;
		    } else if (enemy == "paper") {
		  		console.log("Tie");
			} else if (enemy == "scissors") {
				console.log("I win");
				enemy_count += 1;
		  	}
		} else if (choice = choiceScissors) {
			if (enemy == "rock") {      
				console.log("I win");
		  		enemy_count += 1;
		  	} else if (enemy == "paper") {
		  		console.log("I lose");
		  		player_count += 1;
		  	} else if (enemy == "scissors" ) {
		 		console.log("Tie");
		 	}
		 }

		game_counter += 1;

		if (player_count <= 5 || enemy_count <= 5) {
		console.log(`Player Score: ${player_count}`);
		console.log(`Computer Score: ${enemy_count}`);
		console.log(`Games Played: ${game_counter}`);
		player_count = 0;
		enemy_count = 0;

		} else {
			console.log("incorrect input");
		}
}	 
	function reset() {
		player_count = 0;
		enemy_count = 0;
	}
