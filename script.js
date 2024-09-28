document.addEventListener('DOMContentLoaded', () => {
    // Random number
    const ans = Math.floor(Math.random() * 100) + 1;
    const maxGuess = 10;
    let guessesLeft = maxGuess;
    let guessHistory = [];

    const app = document.getElementById('app');

    function updateGameStatus(message) {
        app.innerHTML = '';

        // Creating message
        const sms = document.createElement('p');
        sms.textContent = message;
        app.appendChild(sms);

        // Creating guesses left element
        const glEl = document.createElement('p');
        glEl.textContent = `Guesses Left: ${guessesLeft}`;
        app.appendChild(glEl);

        // Display history if any
        if (guessHistory.length > 0) {
            const historyEl = document.createElement('p');
            historyEl.textContent = `Your guesses: ${guessHistory.join(', ')}`;
            app.appendChild(historyEl);
        }
    }


    function playGame() {
        if (guessesLeft > 0) {
            setTimeout(() => {
                const userInput = prompt('Enter a number between 1 and 100:');

                if (userInput === null) {
                    updateGameStatus('Game Cancelled.');
                    return;
                }

                const userGuess = parseInt(userInput);

                if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                    alert('Please enter a valid number between 1 and 100.');
                    playGame(); // Retry without decrementing guessesLeft
                } else {
                    guessHistory.push(userGuess);

                    if (userGuess === ans) {
                        alert('Congratulations! You guessed the correct number!');
                        updateGameStatus('You Won! :)');
                    } else {
                        guessesLeft--;
                        if (userGuess < ans) {
                            alert('Too Low!');
                        } else {
                            alert('Too High!');
                        }

                        // Checking if any guesses left
                        if (guessesLeft === 0) {
                            alert(`Game Over! You lose. The correct number was ${ans}. :(`);
                            updateGameStatus('Game Over!');
                        } else {
                            updateGameStatus('Try Again!');
                            playGame();
                        }
                    }
                }
            }, 0);
        }
    }

    // Start the game - Move this outside of the playGame function
    updateGameStatus('Welcome to the Number Guessing Game!');
    playGame();
});
