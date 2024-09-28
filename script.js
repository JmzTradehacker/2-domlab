
//Random number
const ans = Math.floor(Math.random() * 100) + 1;
const maxGuess = 10;
let guessesLeft = maxGuesses;
let guessHistory = [];

const app = document.getElementById('app');

function updateGameStatus(message) {
    app.innerHTML = '';

    //Creating message
    const sms = document.createElement('p');
    sms.textContent = message;
    app.appendChild(sms);

    //Creating guesses left element
    const glEl = document.createElement('p');
    glEl.textContent = `Guesses Left: ${guessesLeft}`;
    app.appendChild(glEl);
    //Display history if any
    if (guessHistory.length > 0) {
        const historyEl = document.createElement('p');
        historyEl.textContent = `Your guesses: ${guessHistory.join(', ')}`;
        app.appendChild(historyEl);
      }
}

function playGame() {

    if (guessesLeft > 0) {
        setTimeout(() => {
            const userInput = prompt('Enter a nember between 1 and 100:');
            
            if (userInput === null) {
                updateGameStatus('Game Cancelled.');
                return;
            }
        })
    }





}