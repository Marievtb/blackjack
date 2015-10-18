// // console.log("ksahfkadjhsdf");

// ====================================
// The Deck
// ------------------------------------------
var card = function(suit, value, face){
this.suit = suit;
this.value = value; 
this.face = face;

}

var aceD = new card('Diamonds', 1, 'Ace');
var aceH = new card('Hearts', 1, 'Ace');
var aceS = new card('Spades', 1, 'Ace');
var aceC = new card('Clubs', 1, 'Ace');

var twoD = new card('Diamonds', 2, '2');
var twoH = new card('Hearts', 2, '2');
var twoS = new card('Spades', 2, '2');
var twoC = new card('Clubs', 2, '2');

var threeD = new card('Diamonds', 3, '3');
var threeH = new card('Hearts', 3, '3');
var threeS = new card('Spades', 3, '3');
var threeC = new card('Clubs', 3, '3');

var fourD = new card('Diamonds', 4, '4');
var fourH = new card('Hearts', 4, '4');
var fourS = new card('Spades', 4, '4');
var fourC = new card('Clubs', 4, '4');

var fiveD = new card('Diamonds', 5, '5');
var fiveH = new card('Hearts', 5, '5');
var fiveS = new card('Spades', 5, '5');
var fiveC = new card('Clubs', 5, '5');

var sixD = new card('Diamonds', 6, '6');
var sixH = new card('Hearts', 6, '6');
var sixS = new card('Spades', 6, '6');
var sixC = new card('Clubs', 6, '6');

var sevenD = new card('Diamonds', 7, '7');
var sevenH = new card('Hearts', 7, '7');
var sevenS = new card('Spades', 7, '7');
var sevenC = new card('Clubs', 7, '7');

var eightD = new card('Diamonds', 8, '8');
var eightH = new card('Hearts', 8, '8');
var eightS = new card('Spades', 8, '8');
var eightC = new card('Clubs', 8, '8');

var nineD = new card('Diamonds', 9, '9');
var nineH = new card('Hearts', 9, '9');
var nineS = new card('Spades', 9, '9'); 
var nineC = new card('Clubs', 9, '9');

var tenD = new card('Diamonds', 10, '10');
var tenH = new card('Hearts', 10, '10');
var tenS = new card('Spades', 10, '10');
var tenC = new card('Clubs', 10, '10');

var jackD = new card('Diamonds', 10, 'J');
var jackH = new card('Hearts', 10, 'J'); 
var jackS = new card('Spades', 10, 'J');
var jackC = new card('Clubs', 10, 'J'); 

var queenD = new card('Diamonds', 10, 'Q');
var queenH = new card('Hearts', 10, 'Q');
var queenS = new card('Spades', 10, 'Q');
var queenC = new card('Clubs', 10, 'Q');

var kingD = new card('Diamonds', 10, 'K');
var kingH = new card('Hearts', 10, 'K');
var kingS = new card('Spades', 10, 'K'); 
var kingC = new card('Clubs', 10, 'K');

var deck = [aceD, aceH, aceS, aceC, twoD, twoH, twoS, twoC, threeD, threeH, threeS, threeC, fourD, fourH, fourS, fourC, fiveD, fiveH, fiveS, fiveC, sixD, sixH, sixS, sixC, sevenD, sevenH, sevenS, sevenC, eightD, eightH, eightS, eightC, nineD, nineH, nineS, nineC, tenD, tenH, tenS, tenC, jackD, jackH, jackS, jackC, queenD, queenH, queenS, queenC, kingD, kingH, kingS, kingC];
// console.log(sixC);
// ============================================================
// shuffle the deck

function shuffle(deck){
	for(var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
		 return deck;
} shuffle(deck);

var tempCard = deck.pop();
console.log(tempCard); 






// function randomCard(){
// 	for(r = 0; r < deck.length; r++){
// 		var newCard= [Math.floor(Math.random([r]))];
// 	} return newCard;
// } randomCard();
// console.log(deck);

// Need a function to deal a random card 

// Now I want to pop two randomCards from the shuffle(deck) for player2 when deal.onclick;
// pop two randomCards from the deck for player1 when deal.onClick;
// pop one card from deck for player2 when hit.onClick;
// pop one card from deck for player1 when hit.onClick 


// =====================
// Functions
//======================

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





// ===========================
// Trial and Error//
// ==========================

// An array of cards
// values
// faces
// suits
// var faces=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
// var values= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
// var suits= ['Hearts', 'Diamonds','Spades', 'Clubs'];
// var cards = function(){
// for(var f = 0; f < faces.length; f++){
// 	for (var v = 0; v < values[f].length; v++){
// 		console.log(cards[v][f]);
// 	} cards();
// // 		for (var s = 0; s < suits[v].length; s++){
// // 			newCard.push(cards[c][v][s]);
// // 		}
// 	}
// }
// }
// console.log(newCard);
// --------------------------------------------------
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
// ----------------------------------------------------
// // var cardFace= ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
// var cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
// var cardSuit= ['Hearts', 'Clubs', 'Diamonds','Spades'];
// var cards = [];
// var wholeDeck = function(){
// for( var i = 0; i< cardFace.length; i++){
// 	for(var v= 0; v<cardSuit.length; v++){
// 		cards.push(cardFace[i]+ ' '+ cardSuit[v])
// 		// for(var s = 0; s < cardSuit[v].length; s++){
// 		// // 	console.log(wholeDeck);
// 		// }
// 	}
// }
// }
