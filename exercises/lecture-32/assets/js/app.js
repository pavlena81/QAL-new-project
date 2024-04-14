
const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}">${item.userId}</span></strong></p>
`;

const xhrPromise = fetch(url);
xhrPromise.then((response) => {
            if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
            }
    
return response.json();
})
    .then((data) => {
        
        console.log(data[0].title);
    }).catch(error => console.error(error))


fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method:`GET`,
})
    .then(response => response.json())
    .then(posts => {    
		let result = ''
        posts.forEach(item => {
        result += template(item)
    })
    document.getElementById("blog").innerHTML = result;
    
})

.then( () => {
  const users  = document.querySelectorAll('.author');
  users.forEach(user => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
        .then(response => response.json())
        .then(user => {    
      console.log(user.name)
      user.textContent = user.name
    })
  })

}).catch(error => console.error(error))