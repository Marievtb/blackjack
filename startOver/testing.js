
// Resources//
// =========================================================
// Dr. Ron Eaglin, Web Programming: Javascript Dealing Cards
// https://www.youtube.com/watch?v=C0O1pZjIN5o



// =========================================================
// Testing //
// =========================================================
// var cardFace= ['A','1','2','3','4','5','6','7','8','9','10','J','Q','K'];
// var cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
// var cardSuit= ['Hearts', 'Clubs', 'Diamonds','Spades'];
// var cards = [];


// var wholeDeck = function(){
// for( var i = 0; i< cardFace.length; i++){
// 	for(var v= 0; v<cardValue[i].length; v++){
// 		for(var s = 0; s < cardSuit[v].length; s++){
// 			return wholeDeck;
// 		}
// 	}
// }
// }

// ===============================
// Notes from Eric Devlin
// ===============================
// // deals a card and adds the value to the person's hand total
// function hit(personHand, persVal, personValue) {
//   var newCard = document.createElement('div');
//   newCard.setAttribute('class', 'cards');
//   personHand.appendChild(newCard);
//   var tempCard = shuffledDeck.pop();
//   newCard.innerHTML = tempCard.img;
//   if (personHand === playerHand) {
//     playVal = playVal + tempCard.val;
//     playerValue.innerHTML = playVal;
//     if (tempCard.val === 11) {
//       playAces = playAces + 1;
//       console.log('player Aces = ' + playAces);
//     }
//   } else {
//     dealVal = dealVal + tempCard.val;
//     dealerValue.innerHTML = dealVal;
//     if (tempCard.val === 11) {
//       dealAces = dealAces + 1;
//       console.log('dealer Aces = ' + dealAces);
//     }
//   }
// }; //end hit