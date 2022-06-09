;"use strict";
const form = document.getElementById('form');
const naam = document.getElementById('naam');
const email = document.getElementById('email');
const bericht = document.getElementById('bericht');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const naamValue = naam.value.trim();
    const emailValue = email.value.trim();
    const berichtValue = bericht.value.trim();

    if(naamValue === '') {
        setError(naam, 'Naam is verplicht');
    } else {
        setSuccess(naam);
    }

    if(emailValue === '') {
        setError(email, 'Email is verplicht');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email is fout ingegeven');
    } else {
        setSuccess(email);
    }

    if(berichtValue === '') {
        setError(bericht, 'Vul het bericht in.');
    } else {
        setSuccess(bericht);
    }
};

// alert("Dylan was here")