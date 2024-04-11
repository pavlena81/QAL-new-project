const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></stan></strong></p>
`;

const xhrPromise = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(method, url);
    req.send();
  
    req.onload = () => {
      if (req.status >= 400) {
        reject(req.response);
      } else {
        resolve(req.response);
      }
    };

    req.onerror = () => {
      reject('Something went wrong!');
    };   
  });

  return promise;
};

xhrPromise("GET", url)
.then(response => {
    const posts = JSON.parse(response)
		let result = ''
    posts.forEach(item => {
        result += template(item)
    })
    document.getElementById("blog").innerHTML = result;
    
})


xhrPromise("GET", 'https://jsonplaceholder.typicode.com/users')
.then(response => {
    const posts = JSON.parse(response)
		
    const template= posts.map(({ username, name}) => {
        
        console.log(username);
        return `
                <p>Author:  <strong><span class="author" data-id="">${name}</span></strong></p>`
    })
    .join("");
    document.getElementById("blog").innerHTML = template;
    
})