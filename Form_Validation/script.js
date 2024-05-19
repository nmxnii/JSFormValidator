// pulling DOM elements
const form = document.getElementById('form'); //grabs the form id in the html
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
function showError(input, message){
  const formControl = input.parentElement; //parent element is the div class form-control bcs it is inside of it
  formControl.className = 'form-control error'; //overrides class
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//show success outline
function showSuccess(input, message){
  const formControl = input.parentElement; //parent element is the div class form-control bcs it is inside of it
  formControl.className = 'form-control success'; //overrides class
}

//check email is valid
function isValidEmail(email){
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLocaleLowerCase());
}

//Event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();
  
  if(username.value === '' ){
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }
  if(email.value === '' ){
    showError(email, 'Email is required');
  }else if (!isValidEmail(email.value)){
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }
  if(password.value === '' ){
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }
  if(password2.value === '' ){
    showError(password2, 'Password 2 is required');
  } else {
    showSuccess(password2);
  }
});
