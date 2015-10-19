// console.log('Javascript');
// (function (){
// 	window.onload()= function(){

// ===========================
// --------THE DECK----------
// ===========================
var card = function(suit, value, face){
this.suit = suit;
this.value = value; 
this.face = face;


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
// =================================
// -----other global variables------
// =================================
// GAME BUTTONS//
var dealButton = document.getElementById('dealButton')
var restartButton = document.getElementById('restart')
// PLAYER 1 ELEMENTS//
var p1Container = document.getElementById('player1-container');
var player1Hand = document.getElementById('player1Hand');
var p1HitCard = document.getElementById('p1HitCard');
var p1HitCard2 = document.getElementById('p1Hitcard2');
var p1HitCard3 = document.getElementById('p1HitCard3');
// PLAYER 1 BUTTONS//
var p1HitButton = document.getElementById('p1Hit');
var p1StandButton = document.getElementById('p1Stand');
// PlAYER 2 ELEMENTS//
var p2Container = document.getElementById('player2-container');
var player2Hand = document.getElementById('player2Hand');
var p2HitCard = document.getElementById('p2HitCard');
var p2HitCard2 = document.getElementById('p2HitCard2');
var p2HitCard3 = document.getElementById('p2HitCard3');
// PlAYER 2 BUTTONS//
var p2HitButton = document.getElementById('p2Hit');
var p2StandButton = document.getElementById('p2Stand');

// =================================
// ----------functions--------------
// =================================

// ---shuffle deck-----

function shuffle(d){
	for(var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), x = d[--i], d[i] = d[j], d[j] = x);
		 return d;
} shuffle(deck);
console.log(deck);

// for each player...


};

// var players = [player1Hand, player2Hand]
// for(var i=0; i <players.length; i++){
// 	players[i].push(deck.pop());
// 	p1Container.appendChild('player1Hand');
// 	p2Container.appendChild('player2Hand');
// }
// deal each player 2 cards 




















// };
// };// -window.onload
// });

