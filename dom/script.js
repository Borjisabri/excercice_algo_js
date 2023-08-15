//Methode 1 :
// const paragraph = document.querySelector("p");
// const text = document.createTextNode("Hello world");
// paragraph.appendChild(text);

//Methode2:
//document.querySelector("p").innerHTML = "hello world";

//Methode 3 :
//document.getElementById("paragraph").innerHTML = "Hello World";

// create list:
// const createList = (nb) => {
//   let ul = document.createElement("ul");
//   for (let i = 0; i < nb; ++i) {
//     li = document.createElement("li");
//     // li.style.fontSize='40px';
//     // li.style.color='blue'
//     li.style.cssText = "font-size:40px;color:red;";
//     li.textContent = `item ${i}`;
//     ul.appendChild(li);
//   }
//   document.body.appendChild(ul);
// };

//createList(4);

//create Table :

let table = document.querySelector(".table");
let tbody = document.querySelector(".tbody");
const data = [
  {
    nom: "Sabri",
    prenom: "Borji",
    tag: "@sabri",
  },
  {
    nom: "Malek",
    prenom: "Abbes",
    tag: "@malek",
  },
  {
    nom: "Omar",
    prenom: "Borji",
    tag: "@omar",
  },
];
console.log(data[0].nom);
const createTable = (nb) => {
  for (let i = 0; i < nb; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.textContent = `${i + 1}`;
    tr.appendChild(th);
    td1.textContent = data[i].nom;
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.textContent = data[i].prenom;
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    td3.textContent = data[i].tag;
    td3.style.cssText = "font-weight:900;color:blue;";
    tr.appendChild(td3);
    tbody.appendChild(tr);
  }
};
createTable(3);
