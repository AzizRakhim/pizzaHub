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

let newPizzaArray = [];

elArray.forEach((el) => {
  let elLi = document.createElement("li");
  elLi.className = "main-item d-flex animate__animated animate__backInUp";
  elLi.innerHTML = `
      <div class="main-img-holder">
        <img src="${el.imgUrl}" alt="${el.name}">
      </div>
      <div class="item-info">
        <h3 class="item-name">
          ${el.name}
        </h3>
        <span class="price">
          $${el.price}
        </span>
        <button class="item-btn addBtn" onclick='addItem(${el.id})'>
          Add to Cart
        </button>
      </div>
    `;

  elMainList.appendChild(elLi);
});

// CREATING CART

function addItem(id) {
  newPizzaArray.push(elArray.filter((item) => item.id === id)[0]);
  addCard(newPizzaArray);
}

function addCard(cardPizzaArray){
  let arr = cardPizzaArray;
  let topArr = [];

  arr.forEach((item) => {
    if(arr != "") topArr.push(arr[0]);
    arr = arr.filter((el) => {
      return arr[0].id != el.id;
    });
  });

  let li = 0;
  let listArr = [];
  total = 0;
  sub = 0;
  tax = 0;

  topArr.forEach((item) => {
    let count = cardPizzaArray.filter((element) => {
      return element.id == item.id;
    });
    li = `
      <li class="main-item d-flex position-relative light-blue">
        <div class="main-img-holder">
          <img src="${item.imgUrl}" alt="${item.name}">
        </div>
        <div class="item-info">
          <h3 class="item-name">
            ${item.name}
          </h3>
          <span class="price">
            $${item.price}
          </span>
          <span class="count">
            ${count.length}
          </span>
          <button class="item-btn addBtn me-2" onclick="addItem(${item.id})">
            +
          </button>
          <button class="item-btn addBtn" onclick="remove(${item.id})">
            -
          </button>
        </div>
      </li>
    `;

    listArr.push(li);
    elCartList.innerHTML = listArr.join("");
  });

  cardPizzaArray.forEach((item) => {
    sub += item.price;
    tax = sub * 10 / 100;
    total = (sub + tax);
  });

  elSub.textContent = sub.toFixed(2);
  elTax.textContent = tax.toFixed(2);
  elTotal.textContent = total.toFixed(2);
}

function remove(elId) {
  let count = 0;
  let a = [];

  newPizzaArray.forEach((element) => {
    if(element.id === elId && count === 0){
      count++;
    } else {
      a.push(element);
    }
  });

  newPizzaArray = a;
  if(newPizzaArray.length === 0){
    elCartList.innerHTML = "";
    elSub.textContent = 0;
    elTax.textContent = 0;
    elTotal.textContent = 0;
  } else{
    addCard(newPizzaArray);
  }
}

