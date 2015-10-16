// // console.log("ksahfkadjhsdf");

// An array of cards
// values
// faces
// suits
var cards=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
var values= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
var suits= ['Hearts', 'Diamonds','Spades', 'Clubs'];
var newCard= [];
for(var c = 0; c< cards.length; c++){
	for (var v = 0; v <values[c].length; v++){
		for (var s = 0; s < suits[v].length; s++){
			newCard.push(cards[c][v][s]);
		}
	}
}
console.log(newCard);
// function randomCards(){
// 	math.random to pull indexes (*2)
// 	dealbutton.onclick 
// }


// function player1Cards{
// 	innerHTML to player 1 card Div
// }

// function player2Cards{
// 	innerHTML in player2cardDiv
// }

// if player1cards > 21{
// 	console.log(player1: + "bust!");
// }
// else if player2cards> 21{
// 	console.log(player2 = "Bust!");
// }

// for 













// ============
// Trial and Error
// ============
// function cards(){
// 	var face = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10','J', 'Q', 'K'];
// 	var suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
// 	var value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10,10, 10];
// 	for(var f = 0; f < face.length; f++){
// 		for(var s = 0; s < suits.length; s++){
// 			for(var v = 0; v < value.length; v++){
// 			} 
		
// 		}
// 	} 
// }
// cards()
