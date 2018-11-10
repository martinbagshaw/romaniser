"use strict";

// runs on input event
const validator = () => {
    // - 0-9 checked in html
    // - under 5000 checked here
    const validNum = parseInt(input.value);
    if (input.value.length===0) {
        conversion.classList.remove('has-error', 'has-result');
        conversion.innerHTML = '';
    }
    // valid and invalid 0-9
    if (input.validity.valid) {
        // <=5000
        if (validNum<=5000) {
            conversion.classList.remove('has-error');
            result();
        } else if (validNum>5000) {
            // >5000
            const errorMsg = `<label for="error-message">Please Enter a number under 5000</label>`;
            conversion.classList.add('has-error');
            conversion.innerHTML = errorMsg;
        }      
    }
    // invalid a-z
    else {
        const errorMsg = `<label for="error-message">Please Enter digits 0 to 9 only</label>`;
        conversion.classList.add('has-error');
        conversion.innerHTML = errorMsg;
    }
    
}

// runs on form submit
const result = (e) => {
    if (e!==undefined) e.preventDefault();
    const romanNumerals = `
        <label for="converted-roman-numerals">Roman Numerals for <span>${input.value}</span> :</label>
        <h2 class="red">${romaniser(input.value)}</h2>
    `;
    conversion.classList.add('has-result');
    conversion.innerHTML = romanNumerals;
    if (e!==undefined) form.reset();
}

// dom elements
const form = document.querySelector('#converter');
const input = document.querySelector('#convert-number');
const conversion = document.querySelector('#conversion');

// event listeners
input.addEventListener('input', validator);
form.addEventListener('submit', result);