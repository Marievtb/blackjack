// console.log("scriptsup");
// xxSet up HTML, JS, and CSS files
// Make a repo on Github
// Set Up html :
//xx There should be a div for: deck, player 1 hand, player 2 hand, buttons, scoreboard 
// Make a deck

// ============
// Game
// ===========
// 
// Players will hit deal button to start game
// deal button shoots out two random cards for each player 
// Players hit or stand (if statements)
// Winner has the best of five hands
// 
// =============
// Players
// =============
// Player1 will act as 'dealer'
// Player1 will need a hit button, stand button
// Player2 will need a hit button, stand button 

// =============
// DECK
// =============
// 52 cards, 4 suits, 
// Make an array or object, push and pop
// use math.random to deal 

// ==============
// Buttons
// ==============
// Deal button will be in the center and generate two cards for each player 
// Each player will have hit and stand buttons
// Start Over button will 
// =============
// Functions
// =============
// 
// need an array of cards 
// // need to randomly pull cards from array
// // need random cards to go to each player
// var player1;
// var player2;

// // Making hand for player1
// var player1hand= document.getElementById('player1');
// // console.log("player1hand");

// // Making hand for player2
// var player2hand= document.getElementById('player2');
// console.log('player2hand');

// function card(){
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


// ===============================================================
// function card(value, name, suit){
// 	this.value = value;
// 	this.name = name;
// 	this.suit = suit;
// }
// function deck(){
// 	this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
// 	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
// 	var cards = [];
    
//     for( var s = 0; s < this.suits.length; s++ ) {
//         for( var n = 0; n < this.names.length; n++ ) {
//             cards.push( new card( n+1, this.names[n], this.suits[s] ) );
//         }
//     }

//     return cards;
// }
// var myDeck = new deck();
// console.log(myDeck);

// window.onload = function() {

// 	for(var i=0; i < myDeck.length; i++){
// 		div = document.createElement('div');
// 		div.className = 'card';

// 		if(myDeck[i].suit == 'Diamonds'){
// 			var ascii_char = '♦';
// 		} else {
// 			var ascii_char = '&' + myDeck[i].suit.toLowerCase() + ';';
// 		}

// 		div.innerHTML = '' + myDeck[i].name + '' + ascii_char + '';
// 		document.body.appendChild(div);
// 	}

// }
// function card(value, name, suit){
//     this.value = value;
//     this.name = name;
//     this.suit = suit;
// }

// function deck(){
//     this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
//     this.suits = ['Hearts','Diamonds','Spades','Clubs'];
//     var cards = [];
    
//     for( var s = 0; s < this.suits.length; s++ ) {
//         for( var n = 0; n < this.names.length; n++ ) {
//             cards.push( new card( n+1, this.names[n], this.suits[s] ) );
//         }
//     }

//     return cards;
// }

// var myDeck = new deck();

// window.onload = function() {

//     for(var i=0; i < myDeck.length; i++){
//         div = document.createElement('div');
//         div.className = 'card';

//         if(myDeck[i].suit == 'Diamonds'){
//             var ascii_char = '&diams;';
//         } else {
//             var ascii_char = '&' + myDeck[i].suit.toLowerCase() + ';';
//         }

//         div.innerHTML = '<span class="number">' + myDeck[i].name + '</span><span class="suit">' + ascii_char + '</span>';
//         document.body.appendChild(div);
//     }


// function shuffle(o) {
// 	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
// 	return o;
// };

// myDeck = shuffle(myDeck);















// // function card(value, name, suit) {
// 	this.value = value;
// 	this.name = name;
// 	this.suit= suit;
// }

// function deck(){
// 	this.names=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
// 	this.suits = ['Hearts', 'Clubs','Diamonds', 'Spades'];
// 	this.cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10];



















