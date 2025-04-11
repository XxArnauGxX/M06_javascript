import { setCookie, getCookie } from "./cookiesController.js";

export let chipsValue = parseInt(getCookie('chips')) || 0;
const contadorChips = document.getElementById('chips');
const addChipsBtn = document.getElementById('add-chips-btn');
const addChipsInput = document.getElementById('add-chips');

contadorChips.textContent = chipsValue;

addChipsBtn.addEventListener('click', () => {
    const inputValue = parseInt(addChipsInput.value);
    if (!inputValue || inputValue <= 0 || inputValue > 9999) {
        alert('¡El valor a añadir debe estar entre 1 y 9999!');
        addChipsInput.value = '';
        return;
    }

    chipsValue += inputValue;
    contadorChips.textContent = chipsValue;
    setCookie('chips', chipsValue);

    alert(`¡Has añadido ${inputValue} fichas!`);
    addChipsInput.value = '';
});