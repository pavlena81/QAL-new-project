
const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;

const form = document.getElementById('demoForm');
console.log(form);
const titleEl = document.getElementById('waiting');

const handler = () => {
       
    const firstNameInput = form.querySelector('input[name="firstName"]');
    const lastNameInput = form.querySelector('input[name="lastName"]');
    
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();

    console.log(firstName);
    
    if (firstName === "" && lastName === "") {
        console.log("I'm miss You"); 
    titleEl.textContent='I\'m miss You';
    }else {
        titleEl.textContent = `Hello ${firstName} ${lastName}!`;     }
}
// setInterval(handler, 10000);

setTimeout(handler, 10000)

form.addEventListener("input", handler);  


// === 
const demo = document.getElementById('demo');

 const req = new XMLHttpRequest();
    
    req.responseType = 'json';
    
    req.open('GET', "https://jsonplaceholder.typicode.com/posts", true);
    
    
req.onload = function () {
    console.log(req.response);
    handleResponse(req.response);    
}
  
req.send();

function handleResponse(response) {
    
     const template = response
    .map(({title, body}) => {
      return `<h3>${title}</h3>
              <div>${body}</div>`;
    })
    .join("");
  demo.innerHTML = template;
}
 

