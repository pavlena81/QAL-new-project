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

// task 5 ===

 const btnDark = document.querySelector('.btn-dark');
 const btnLight = document.querySelector('.btn-light');

// const onBody = document.querySelector('body');

// btnDark.addEventListener('click', function () {
    
//     onBody.classList.toggle('dark-mode');
//     btnDark.style.display = 'none';

//      btnLight.style.display = "inline-block";
//     console.log("dark-mode add");    
// });
// btnLight.addEventListener('click', function () {

//     onBody.classList.remove('dark-mode');
    
//     btnDark.style.display = "inline-block";
//     btnLight.style.display = "none";
    
//     console.log('dark-mode remove');
// })

function toggleMode() {
    
    document.body.classList.toggle('dark-mode'); 

    const btnDark = document.querySelector('.btn-dark');
    const btnLight = document.querySelector('.btn-light');

    const isDarkMode = document.body.classList.contains('dark-mode');
    btnDark.style.display = isDarkMode ? 'none' : 'inline-block';
    btnLight.style.display = isDarkMode ? 'inline-block' : 'none';
}

btnDark.addEventListener('click', toggleMode);
btnLight.addEventListener('click', toggleMode);

// task 6 === 
const btnInfo = document.querySelector('.btn-info');

btnInfo.addEventListener('keypress', (event) => {

    const keyName = event.key;
    if (keyName === 'Enter') {
        event.preventDefault();

        alert.classList.add('alert-info');
        alert.textContent = "A simple info alert—check it out!";
        console.log("btnInfo event");
    }
})

// task 7 ===
const cardSelectors = document.querySelectorAll('.card');
console.log(cardSelectors);

for (let i of cardSelectors) {
    // console.log(i.firstElementChild.firstElementChild);
    const cardTitle = i.querySelector('.card-title');
    if (cardTitle) {
        console.log(cardTitle.textContent);
    }
}

// task 8 === 
const cardsAll = document.querySelectorAll('.card');

cardsAll.forEach(elem=> {
    const btnCard = elem.querySelector('.add-to-cart');
    console.log(btnCard);

    btnCard.addEventListener('click', function () {
        console.log(elem.querySelector('.card-title').textContent);
    })
})
