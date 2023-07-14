/*

To start creating a DECK of cards, we have already pictures in English language on the folder assets/cards so:

* 2C.png = 'Two of Clubs'
* 2D.png = 'Two of Diamonds'
* 2H.png = 'Two of Hearts'
* 2S.png = 'Two of Spades'

NOTICE: Then open DevTools for developers in your browser to see the console

To protect the code by third parties, changes, avoid errors or manipulations on console of our code, we need to use the MODULE PATTERN below and include all the code inside de arrow function self summoned with 'use strict' inside

(() => {
  'use strict'

  // Paste your code here! <----------
  
})();

*/

(() => {
  "use strict";

  let deck = [];
  const types = ["C", "D", "H", "S"],
    specials = ["A", "J", "Q", "K"];

  // Player and computer points
  let playerPoints = 0,
    computerPoints = 0;

  // HTML references
  const buttonAskFor = document.querySelector("#buttonAskFor"),
    buttonStop = document.querySelector("#buttonStop"),
    buttonNewGame = document.querySelector("#buttonNewGame"),
    pointsHTML = document.querySelectorAll("small"),
    divPlayerCards = document.querySelector("#player-cards"),
    divComputerCards = document.querySelector("#computer-cards");

  // This function create a complete deck
  const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
      // deck.push(i + 'C');

      // We create a loop FOR concatenating and including every card
      for (let type of types) {
        deck.push(i + type);
      }
    }
    for (let type of types) {
      for (let special of specials) {
        deck.push(special + type);
      }
    }
    // console.log(deck);

    // Here change the value of deck to apply the function shuffle included in the underscore-minified.js file and we'll see the deck dealt randomly already refreshing the browser everytime

    deck = _.shuffle(deck);
    return deck;
  };

  createDeck();

  // This function let me take a card
  const askForCard = () => {
    if (deck.length === 0) {
      throw "No more cards in the deck";
      // We use throw to stop the process when the condition happens and show me a Uncaught error on console with message 'string'
    }

    // .pop --->  Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
    return deck.pop();
  };

  // To remove the last character of the 'string'
  // we use .substring(); to return a condition with ternary operator simplified
  const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
  };

  // Computer turn...
  const computerTurn = (minimunPoints) => {
    do {
      const card = askForCard();

      computerPoints = computerPoints + cardValue(card);
      // pointsHTML[0].innerText = playerPoints;
      pointsHTML[1].innerText = computerPoints;

      // <img class="card" src="assets/cards/AS.png">
      const imgCard = document.createElement("img");
      // With backticks you can include ${ object }.extension in the path
      imgCard.src = `src/assets/cards/${card}.png`;
      // With classList.add we can apply styles css
      imgCard.classList.add("card");
      // We include img in the HTML
      divComputerCards.append(imgCard);

      if (minimunPoints > 21) {
        break;
      }
    } while (computerPoints <= minimunPoints && computerPoints <= 21);

    // Alert message (prompt)
    setTimeout(() => {
      if (computerPoints === minimunPoints) {
        alert("TIE, split pot");
      } else if (minimunPoints > 21) {
        alert("Computer Wins, try again!");
      } else if (computerPoints > 21) {
        alert("You Win!");
      } else {
        alert("Computer Wins, try again!");
      }
    }, 100);
  };

  const value = cardValue(askForCard());
  // console.log({ value });

  /* Events...

Add an #id to each button in the HTML and rename them
Then create a const buttonAskFor = document.querySelector('#buttonAskFor');

[#id.addEventListener('click' or other,()=>{} )]

*/

  buttonAskFor.addEventListener("click", () => {
    const card = askForCard();
    // console.log(card);

    // We create 2 new variables to see the player and computer points Up
    playerPoints = playerPoints + cardValue(card);

    // HTML references
    pointsHTML[0].innerText = playerPoints;
    pointsHTML[1].innerText = computerPoints;

    // <img class="card" src="assets/cards/AS.png">
    const imgCard = document.createElement("img");
    // With backticks you can include ${ object }.extension in the path
    imgCard.src = `src/assets/cards/${card}.png`;
    // With classList.add we can apply styles css
    imgCard.classList.add("card");
    // We include img in the HTML
    divPlayerCards.append(imgCard);

    if (playerPoints > 21) {
      console.warn("Sorry, you have lost");
      // We use .dissable to not allow ask for ore cards
      buttonAskFor.disabled = true;
      buttonStop.disabled = true;
      // We call here the function
      computerTurn(playerPoints);
    } else if (playerPoints === 21) {
      console.warn("21, great!");
      buttonAskFor.disabled = true;
      buttonStop.disabled = true;
      computerTurn(playerPoints);
    }
  });

  buttonStop.addEventListener("click", () => {
    buttonAskFor.disabled = true;
    buttonStop.disabled = true;
    computerTurn(playerPoints);
  });

  buttonNewGame.addEventListener("click", () => {
    // console.clear();
    // deck = [];
    // deck = createDeck();

    playerPoints = 0;
    computerPoints = 0;

    pointsHTML[0].innerText = 0;
    pointsHTML[1].innerText = 0;

    divPlayerCards.innerHTML = "";
    divComputerCards.innerHTML = "";

    buttonAskFor.disabled = false;
    buttonStop.disabled = false;
  });
})();
