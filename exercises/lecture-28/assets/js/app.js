const registerForm = document.getElementById('registrationForm');
console.log(registerForm);

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
    const form = event.target;
    const username = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    errorMessage.innerHTML = '';
  
    try { 
    
    if (username === "" || email === "" || password === "") {
        
        throw new Error('Please fill in all fields and enter a correct data.');   
    
    }
    if (!emailIsValid(email)) {
        throw new Error('Please enter a valid email address.');
    
    }
    if (!passwordIsValid(password)) {
       throw new Error('Please enter a valid password.The password have to contain at least 8 characters(Password123!)')
    }

        console.log(`Username: ${username},  Email: ${email}, Password: ${password}`);
        form.reset();

    } catch (error) {
        
        displayErrorMessage(error.message);
        console.log('Please fill in all fields and enter a correct data....')
    }
}

// === 
function emailIsValid(email) {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function passwordIsValid(password) {
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   return pattern.test(password)
}
// ========== error;
const errorMessage = document.getElementById('errorMessages');

function displayErrorMessage(message) {
  const errorMes = document.createElement('p');
  errorMes.textContent = message;
  errorMessage.appendChild(errorMes);
}