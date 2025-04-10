import { setCookie, getCookie } from "./cookiesController.js";
import { chipsValue } from "./addChipsController.js";

const betChipsInput = document.getElementById('bet');
const betTypeInput = document.getElementById('bet-type');
const betNumberInput = document.getElementById('bet-number');
const betBtn = document.getElementById('bet-btn');
const output = document.getElementById('result');

betBtn.addEventListener('click', () => {
    const betAmount = parseInt(betChipsInput.value);
    const betType = betTypeInput.value
    const betNumber = parseInt(betNumberInput.value);
    if (betAmount > chipsValue || betAmount <= 0) {
        alert('¡Fichas insuficientes!');
        betChipsInput.textContent = '';
        return;
    }

    if (betNumber == null) {
        if (betType === par) {

        }
        
    } else if (betNumber != null) {

    }



    


})
