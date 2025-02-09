let randomNumber = Math.floor(Math.random() * 100);
let attempts = 0;
const maxAttempts = 6;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    const counter = document.getElementById('counter');
    const remaining = document.getElementById('remaining');
    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `🎉 Congratulations! You guessed it right in ${attempts} attempts. The number was ${randomNumber}.`;
    } else if (userGuess < randomNumber) {
        message.textContent = '🔼 The guessed number is too low.';
    } else {
        message.textContent = '🔽 The guessed number is too high.';
    }

    if (attempts >= maxAttempts && userGuess !== randomNumber) {
        message.textContent = `💔 You lose. The number was ${randomNumber}.`;
    }

    counter.textContent = `Attempts: ${attempts}`;
    remaining.textContent = `Remaining guesses: ${maxAttempts - attempts}`;
}
