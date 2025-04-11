import { setCookie } from "./cookiesController.js";
import { chipsValue } from "./addChipsController.js";

let chips = chipsValue;
const betChipsInput = document.getElementById('bet');
const betTypeInput = document.getElementById('bet-type');
const betNumberInput = document.getElementById('bet-number');
const betBtn = document.getElementById('bet-btn');
const output = document.getElementById('result');
const chipsDisplay = document.getElementById('chips');
const testType = document.getElementById('test-type');

function updateChipsAndUI(won, amount, message) {
    if (won) {
        chips += amount;
    }
    output.textContent = message;
    chipsDisplay.textContent = chips;
    setCookie('chips', chips);
    betChipsInput.value = '';
    betNumberInput.value = '';
}

betBtn.addEventListener('click', () => {
    const betAmount = parseInt(betChipsInput.value);
    const betType = betTypeInput.value;
    const betNumber = betNumberInput.value === '' ? null : parseInt(betNumberInput.value);

    // Validate bet amount
    if (isNaN(betAmount) || betAmount > chips || betAmount <= 0) {
        alert('¡Fichas insuficientes o cantidad inválida!');
        betChipsInput.value = '';
        return;
    }

    // Handle test cases
    if (testType.value !== 'no-test') {
        chips -= betAmount;
        if (testType.value === 'win-test') {
            const winAmount = betNumber !== null ? betAmount * 2 : betAmount * 1.5;
            updateChipsAndUI(true, winAmount, '¡Has ganado!');
        } else {
            updateChipsAndUI(false, 0, '¡Has perdido!');
        }
        return;
    }

    // Validate bet number if provided
    if (betNumber !== null) {
        if (betNumber < 0 || betNumber > 36 || !Number.isInteger(betNumber)) {
            alert('ERROR: El número debe ser entre 0 y 36');
            betNumberInput.value = '';
            return;
        }

        const isEven = betNumber % 2 === 0;
        if ((betType === 'par' && !isEven) || (betType === 'impar' && isEven)) {
            alert('ERROR: El número debe ser ' + betType);
            betNumberInput.value = '';
            return;
        }
    }

    // Process the bet
    const winningNumber = Math.floor(Math.random() * 37);
    const isWinningNumberEven = winningNumber % 2 === 0;
    chips -= betAmount;

    let won = false;
    let winAmount = 0;
    let message = '';

    if (betNumber !== null && betNumber === winningNumber) {
        won = true;
        winAmount = betAmount * 2;
        message = `¡Has ganado! Número ganador: ${winningNumber}`;
    } else if (!betNumber && ((betType === 'par' && isWinningNumberEven) || 
                             (betType === 'impar' && !isWinningNumberEven))) {
        won = true;
        winAmount = betAmount * 1.5;
        message = `¡Has ganado! Era ${isWinningNumberEven ? 'par' : 'impar'}`;
    } else {
        message = `Has perdido. Número ganador: ${winningNumber}`;
    }

    updateChipsAndUI(won, winAmount, message);
});