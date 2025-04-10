const contadorChips = document.getElementById('chips');
// add chips
const addChipsBtn = document.getElementById('add-chips-btn');
const addChipsInput = document.getElementById('add-chips');

let chipsValue = parseInt(getCookie('chips')) || 0;
contadorChips.textContent = chipsValue;

document.addEventListener('DOMContentLoaded', () => {
    addChipsBtn.addEventListener('click', () => {
        const inputValue = parseInt(addChipsInput.value);
        if (!inputValue || inputValue <= 0 || inputValue > 9999) {
            alert('¡El valor a añadir debe estar entre 1 y 9999!');
            addChipsInput.value = '';
            return;
        }

        chipsValue = chipsValue + inputValue;
        contadorChips.textContent = chipsValue;
        setCookie('chips', chipsValue);

        alert(`¡Has añadido ${inputValue} fichas!`);
        addChipsInput.value = '';
    })
});

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
}

function setCookie(name, value) {
    document.cookie = `${name}=${value}; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/;`;
}