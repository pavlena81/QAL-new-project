const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item,username) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}">${username}</span></strong></p>
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
        result += template(item, '')
    })
    document.getElementById("blog").innerHTML = result;
    
})


xhrPromise("GET", 'https://jsonplaceholder.typicode.com/users')
.then(response => {
    const users = JSON.parse(response);
    const userIdMap = {};
		
    users.map(user => {
        
        console.log(user.username);
        userIdMap[user.id] = user.name;
        // return `
        //         <span class="author" data-id="${user.id}">${user.username}</span>`
    })
        .join("");
    
    // document.getElementById("blog").innerHTML = template;

    const authorEl = document.querySelectorAll('.author');
    authorEl.forEach(el => {
        const userId = el.dataset.id;
        if (userIdMap[userId]) {
            el.textContent = userIdMap[userId]; 
        }
        
    });
    
}).catch(error=>console.error(error))