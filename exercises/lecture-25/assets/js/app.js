// task 1 === 
const list = ['html', 'css', 'javascript', 'react.js'];

const ul = document.createElement('ul');

list.forEach((i) => {
    const li = document.createElement('li');
    li.textContent = i;
    ul.appendChild(li);
})

document.body.appendChild(ul);

// task 2 === 
const listWithHref = [
    {'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];
const listItem = document.querySelectorAll('li');

const listLinks = listWithHref.map(item => {
    const key = Object.keys(item)[0];
    const value = Object.values(item)[0];
    return `<a class="list-link" href="${value}">${key}</a>`;
});

listItem.forEach((li, index) => {
    li.insertAdjacentHTML('beforeend', listLinks[index]);
});

// task 3 ====

const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]

function studentsTable() {
   
    let tblBody = document.createElement("tbody");
    let thead = document.createElement("thead");
    let thFirstName = document.createElement("th");
    let thLastName = document.createElement("th");
    let thDegree = document.createElement("th");
    let row = document.createElement("tr");
    let tbl = document.createElement("table");

    thFirstName.textContent = "First Name";
    thLastName.textContent = "Last Name";
    thDegree.textContent = "Degree";

    row.appendChild(thFirstName);
    row.appendChild(thLastName);
    row.appendChild(thDegree);
    thead.appendChild(row);
    tbl.appendChild(thead);


    for (let i = 0; i < students.length; i++){
        let student = students[i];
        let row = document.createElement("tr");     

        let cellFirstName = document.createElement("td");
        let cellLastName = document.createElement("td");
        let cellDegree = document.createElement("td");
        
        cellFirstName.textContent = student.firstName;
        cellLastName.textContent = student.lastName;
        cellDegree.textContent = student.degree;
        
        row.appendChild(cellFirstName);
        row.appendChild(cellLastName);
        row.appendChild(cellDegree);
        
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);

}
studentsTable();
