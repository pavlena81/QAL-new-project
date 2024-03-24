const alert = document.querySelector('.alert');

// task 1 ===

const btn = document.querySelector('.btn-primary');
console.log(btn);

const handleClick = () => {

    alert.classList.add('alert-primary');
    document.querySelector('.alert').textContent = "A simple primary alert—check it out!";

    console.log(alert.classList);
    console.log("Button was clicked");
};

btn.addEventListener("click", handleClick);

// task 2 ===
const btnSecondary = document.querySelector('.btn-secondary');

const onHandleClick = () => {

    alert.classList.add('alert-primary');
    document.querySelector('.alert').textContent = "A simple secondary alert—check it out!";

    console.log("Button btnSecondary was clicked");
}

btnSecondary.addEventListener('click', onHandleClick);

// task 3 === 
const btnSuccess = document.querySelector('.btn-success');

const handleMouseOver =()=> {

    alert.classList.add('alert-success');
    alert.textContent = "A simple success alert—check it out!"

    console.log("Button-Success was clicked");
}

btnSuccess.addEventListener("mouseover", handleMouseOver);

const handleMouseOut = () => {
    alert.classList.remove('alert-success');
    alert.textContent = " ";

    console.log('Remove class "alert-success"');
}

btnSuccess.addEventListener("mouseout", handleMouseOut);

// task 4 === 
const btnDanger = document.querySelector('.btn-danger');

const handleFocus =()=> {

    alert.classList.add('alert-danger');
    alert.textContent = "A simple danger alert—check it out!"

    console.log("Button-danger was focus");
}

btnDanger.addEventListener("focus", handleFocus);

const handleFocusOut = () => {
    alert.classList.remove('alert-danger');
    alert.textContent = " ";

    console.log('Remove class "alert-danger"');
}

btnDanger.addEventListener("mouseout", handleFocusOut);

