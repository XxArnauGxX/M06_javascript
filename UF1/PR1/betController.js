import { setCookie } from "./cookiesController.js";
import { chipsValue } from "./addChipsController.js";

let chips = chipsValue;
const betChipsInput = document.getElementById('bet');
const betTypeInput = document.getElementById('bet-type');
const betNumberInput = document.getElementById('bet-number');
const betBtn = document.getElementById('bet-btn');
const output = document.getElementById('result');
const chipsDisplay = document.getElementById('chips');

betBtn.addEventListener('click', () => {
    const betAmount = parseInt(betChipsInput.value);
    const betType = betTypeInput.value;
    const betNumber = betNumberInput.value === '' ? null : parseInt(betNumberInput.value);

    // Validar fichas de apuesta
    if (isNaN(betAmount) || betAmount > chips || betAmount <= 0) {
        alert('¡Fichas insuficientes o cantidad inválida!');
        betChipsInput.value = '';
        return;
    }

    // Validar número si se ha introducido
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

    // Generar número aleatorio
    const winningNumber = randomNumber();
    output.textContent = `Número ganador: ${winningNumber}`;

    // Restar apuesta inicial
    chips -= betAmount;
    let won = false;

    // Comprobar resultado
    const isWinningNumberEven = winningNumber % 2 === 0;

    // Apuesta por número específico
    if (betNumber !== null) {
        if (betNumber === winningNumber) {
            chips += betAmount * 3;
            output.textContent += ' - ¡Has ganado! Número exacto';
            won = true;
        }
    }
    // Apuesta solo por tipo (par/impar)
    else if ((betType === 'par' && isWinningNumberEven) ||
        (betType === 'impar' && !isWinningNumberEven)) {
        chips += betAmount * 1.5;
        output.textContent += ` - ¡Has ganado! Era ${isWinningNumberEven ? 'par' : 'impar'}`;
        won = true;
    }

    if (!won) {
        output.textContent += ' - Has perdido';
    }

    // Actualizar chips en pantalla y cookies
    chipsDisplay.textContent = chips;
    setCookie('chips', chips);

    // Limpiar campos
    betChipsInput.value = '';
    betNumberInput.value = '';
});

function randomNumber() {
    return Math.floor(Math.random() * 37);
}