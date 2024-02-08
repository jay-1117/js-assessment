document.getElementById('myform').addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    resetValidationMessages();

    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;
    var rePassword = document.getElementById('rePasswordInput').value;
    var firstName = document.getElementById('fnameInput').value;
    var lastName = document.getElementById('lnameInput').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var country = document.getElementById('countrySelect').value;
    var terms = document.getElementById('agree').checked;
    var newsletter = document.getElementById('newsletter').checked;

    if (!validateEmail(email)) {
        displayValidationMessage('emailError', 'Invalid email format');
        return false;
    }

    if (password.length < 6) {
        displayValidationMessage('passwordError', 'Password must be at least 6 characters long');
        return false;
    }

    if (password !== rePassword) {
        displayValidationMessage('rePasswordError', 'Passwords do not match');
        return false;
    }

    if (firstName.trim() === '') {
        displayValidationMessage('fnameError', 'First name is required');
        return false;
    }

    if (lastName.trim() === '') {
        displayValidationMessage('lnameError', 'Last name is required');
        return false;
    }

    
    if (!gender) {
        displayValidationMessage('genderError', 'Please select a gender');
        return false;
    }

    if (country === 'select') {
        displayValidationMessage('countryError', 'Please select a country');
        return false;
    }

    if (!terms) {
        displayValidationMessage('termsError', 'Please agree to the terms and conditions');
        return false;
    }

    if (!newsletter) {
        displayValidationMessage('newsletterError', 'Please select if you want to receive the newsletter');
        return false;
    }

    document.getElementById('myform').submit();
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.toLowerCase());
}

function displayValidationMessage(elementId, message) {
    var errorMessageSpan = document.getElementById(elementId);
    errorMessageSpan.innerText = message;
}

function resetValidationMessages() {
    var errorSpans = document.querySelectorAll('.error-message');
    errorSpans.forEach(function (span) {
        span.innerText = '';
    });
}