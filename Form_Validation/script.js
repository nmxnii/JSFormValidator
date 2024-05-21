// pulling DOM elements
const form = document.getElementById('form'); //grabs the form id in the html
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showError(input, message) {
  const formControl = input.parentElement; //parent element is the div class form-control bcs it is inside of it
  formControl.className = 'form-control error'; //overrides class
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//show success outline
function showSuccess(input, message) {
  const formControl = input.parentElement; //parent element is the div class form-control bcs it is inside of it
  formControl.className = 'form-control success'; //overrides class
}

//check email is valid
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`); //backticks to loop through array and give the id
      isRequired = true;
    } else {
      showSuccess(input);
    }
  }); //loops through array and does what it wants within the loop
  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check passwords mathch

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

//Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // array so that we dont have to do cehckrequ althe time
  if (checkRequired([username, email, password, password2])) {
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
  }
});
