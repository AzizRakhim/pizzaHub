// CREATING ARRAY

let elArray = [{
    imgUrl: "https://quizzical-murdock-fa5953.netlify.app/img/pizza1.png",
    name: "Pepperoni",
    price: 2.23,
    id: 1
  },
  {
    imgUrl: "https://quizzical-murdock-fa5953.netlify.app/img/pizza3.jpg",
    name: "Cheesy",
    price: 5.99,
    id: 2
  },
  {
    imgUrl: "https://quizzical-murdock-fa5953.netlify.app/img/pizza2.jpg",
    name: "Margarita",
    price: 7.48,
    id: 3
  },
  {
    imgUrl: "https://quizzical-murdock-fa5953.netlify.app/img/pizza3.jpg",
    name: "Hawaiian",
    price: 9.32,
    id: 4
  }
];

// CREATING MENU

const elMainList = document.querySelector("#main-list");
const elCartList = document.querySelector("#cart-list");

let elSub = document.querySelector(".sub-num");
let elTax = document.querySelector(".tax-num");
let elTotal = document.querySelector(".total");

let sub = 0;
let tax = 0;
let total = 0;

for (let i = 0; i < elArray.length; i++) {
  let elLi = document.createElement("li");
  elLi.className = "main-item d-flex animate__animated animate__backInUp";
  elLi.innerHTML = `
      <div class="main-img-holder">
        <img src="${elArray[i].imgUrl}" alt="${elArray[i].name}">
      </div>
      <div class="item-info">
        <h3 class="item-name">
          ${elArray[i].name}
        </h3>
        <span class="price">
          $${elArray[i].price}
        </span>
        <button class="item-btn addBtn" onclick='addItem(${elArray[i].id})'>
          Add to Cart
        </button>
      </div>
    `;

  elMainList.appendChild(elLi);
}

// CREATING CART

let newArray = [];

function addItem(id) {
  for (let i = 0; i < elArray.length; i++) {
    if (id == elArray[i].id) {
      newArray.push(elArray[i]);
    }
  }

  for (let i = 0; i < newArray.length; i++) {
    if (i == newArray.length - 1) {
      let elLi = document.createElement("li");

      elLi.className = "main-item d-flex animate__animated animate__backInUp light-blue";
      elLi.innerHTML = `
        <div class="main-img-holder">
          <img src="${newArray[i].imgUrl}" alt="${newArray[i].name}">
        </div>
        <div class="item-info">
          <h3 class="item-name">
            ${newArray[i].name}
          </h3>
          <span class="price">
            ${newArray[i].price}
          </span>
          <button class="item-btn addBtn" onclick="removeItem(${i})">
            Remove from Cart
          </button>
        </div>
      `;

      sub += newArray[i].price;
      elSub.textContent = sub.toFixed(2);

      tax = sub * 10 / 100;
      elTax.textContent = tax.toFixed(2);

      total = (sub + tax);
      elTotal.textContent = total.toFixed(2);

      elCartList.appendChild(elLi);
    }
  }
}

function removeItem(index) {
  let newArrayRemove = [];

  for (let i = 0; i < newArray.length; i++) {
    if (index != i) {
      newArrayRemove.push(newArray[i]);
    }
  }

  newArray = newArrayRemove;

  elCartList.innerHTML = "";

  sub = 0;
  tax = 0;
  total = 0;
  
  for (let i = 0; i < newArray.length; i++) {
    let elLi = document.createElement("li");

    elLi.className = "main-item d-flex light-blue";
    elLi.innerHTML = `
      <div class="main-img-holder">
        <img src="${newArray[i].imgUrl}" alt="${newArray[i].name}">
      </div>
      <div class="item-info">
        <h3 class="item-name">
          ${newArray[i].name}
        </h3>
        <span class="price">
          ${newArray[i].price}
        </span>
        <button class="item-btn addBtn" onclick="removeItem(${i})">
          Remove from Cart
        </button>
      </div>
    `;

    sub += newArray[i].price;
    elSub.textContent = sub.toFixed(2);

    tax = sub * 10 / 100;
    elTax.textContent = tax.toFixed(2);

    total = (sub + tax);
    elTotal.textContent = total.toFixed(2);

    elCartList.appendChild(elLi);
  }

  if(newArray.length == 0){
    sub = 0;
    tax = 0;
    total = 0;

    elSub.textContent = sub;
    elTax.textContent = tax;
    elTotal.textContent = total;
  }
}


let elArr = [1, 2, 1, 3, 2, 3, 3, 5];
let b = [];
let count = elArr.length;

for(let i = 0; i < count; i++){
  let k = [];
  let l = [];
  for(let j = 0; j < elArr.length; j++){
    if(elArr[0] == elArr[j]){
      k.push(elArr[j]);
    } else{
      l.push(elArr[j]);
    }
  }
  elArr = l;
  if(k != "") b.push(k);
}

console.log(b);


