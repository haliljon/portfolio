const form = document.querySelector('form');
const full_name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const errorFName = document.querySelector('#small-1');
const spanName = document.querySelector('#small-11')
const errorEmail = document.querySelector('#small-3');
const spanEmail = document.querySelector('#small-33')
const errorText = document.querySelector('#small-4');
const spanText = document.querySelector('#small-44')
form.addEventListener('submit', (element) => {
    if (full_name.value === '' || full_name.value == null) {
        element.preventDefault();
        errorFName.innerText = 'Name is required';
        spanName.style.display = 'none'
    } else {
        errorFName.innerText = '';
        spanName.style.display = 'block'
    }
    if (email.value === '' || email.value == null) {
        element.preventDefault();
        errorEmail.innerText = 'Email is required';
        spanEmail.style.display = 'none'
    } else if (email.value.toLowerCase() !== email.value) {
        element.preventDefault();
        errorEmail.innerText = 'Please fill in your email address in lower case';
        spanEmail.style.display = 'none'
    } else if (!email.value.includes('@') || !email.value.includes('.')) {
        errorEmail.innerText = 'Please enter a valid email address';
        spanEmail.style.display = 'none'
    } else {
        errorEmail.innerText = '';
        spanEmail.style.display = 'block'
    }
    if (message.value === '' || message.value == null) {
        element.preventDefault();
        errorText.innerText = 'Text is required';
        spanText.style.display = 'none'
    } else {
        errorText.innerText = '';
        spanText.style.display = 'block'
    }
});
