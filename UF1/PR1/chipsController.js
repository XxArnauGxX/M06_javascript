const contadorChips = document.getElementById('chips');
// add chips
const addChipsBtn = document.getElementById('add-chips-btn');
const addChipsInput = document.getElementById('add-chips');

let chipsValue = 0;
document.cookie = `chips=${chipsValue};`;

document.addEventListener('DOMContentLoaded', () => {

    addChipsBtn.addEventListener('click', () => {
        if (addChipsInput.value <= 0) {
            alert('El valor a añadir no puede ser negativo o 0');
        } else {
            alert(`¡Has añadido: ${addChipsInput.value} fichas!`);
            chipsValue = parseInt(chipsValue) + parseInt(addChipsInput.value);
            contadorChips.textContent = `${chipsValue}`;
        }
    })
});

function getCookie(name) {

}

function setCookie(name, value) {

}