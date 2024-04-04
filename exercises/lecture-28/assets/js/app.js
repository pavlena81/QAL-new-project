const registerForm = document.getElementById('registrationForm');
console.log(registerForm);

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
    const form = event.target;
    const username = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
  
  if (username === " " || email === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }
  if (!emailIsValid(email)) {
    alert('Please enter a valid email address.');
    return;
  }
    if (!passwordIsValid(password)) {
        alert('Please enter a valid password.')
    }

  console.log(`Username: ${username},  Email: ${email}, Password: ${password}`);
  form.reset();
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
