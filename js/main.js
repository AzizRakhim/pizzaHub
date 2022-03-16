// CREATING ARRAY

let elArray = [
  {
    imgUrl : "https://quizzical-murdock-fa5953.netlify.app/img/pizza1.png",
    name : "Pepperoni",
    price : 2.23,
    id : 1
  },
  {
    imgUrl : "https://quizzical-murdock-fa5953.netlify.app/img/pizza3.jpg",
    name : "Cheesy",
    price : 5.99,
    id : 2
  },
  {
    imgUrl : "https://quizzical-murdock-fa5953.netlify.app/img/pizza2.jpg",
    name : "Margarita",
    price : 7.48,
    id : 3
  },
  {
    imgUrl : "https://quizzical-murdock-fa5953.netlify.app/img/pizza3.jpg",
    name : "Hawaiian",
    price : 9.32,
    id : 4
  }
];

// CREATING MENU

const elMainList = document.querySelector("#main-list");

for(let i = 0; i < elArray.length; i++){
  
    let elLi = document.createElement("li");

    elLi.innerHTML = `
      <li class="main-item d-flex animate__animated animate__backInUp">
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
          <button class="item-btn addBtn">
            Add to Cart
          </button>
        </div>
      </li>`;

    elMainList.appendChild(elLi);
}

// CREATING CART

const elCartList = document.querySelector("#cart-list");

let elAddBtn = document.querySelectorAll(".addBtn");
let newArray = [];

for(let i = 0; i < elAddBtn.length; i++){
  elAddBtn[i].addEventListener("click", () => {
    newArray[newArray.length] = elArray[i];

    let elLi = document.createElement("li");

    elLi.innerHTML = `
      <li class="main-item d-flex animate__animated animate__backInUp light-blue">
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
          <button class="item-btn addBtn del">
            Remove from Cart
          </button>
        </div>
      </li>`;

    elCartList.appendChild(elLi);

    // ADDING UP THE BILL

    let elSub = document.querySelector(".sub-num");
    let elTax = document.querySelector(".tax-num");
    let elTotal = document.querySelector(".total");

    let sub = 0;
    let tax = 0;
    let total = 0;

    for(let i = 0; i < newArray.length; i++){

      sub += newArray[i].price;
      elSub.textContent = sub.toFixed(2);

      tax = sub * 10 / 100;
      elTax.textContent = tax.toFixed(2);

      total = (sub + tax);
      elTotal.textContent = total.toFixed(2);
    }

    // REMOVING ELEMENTS

    let elDel = document.querySelectorAll(".del");              
    
    for(let i = 0; i < newArray.length; i++){
      elDel[i].addEventListener("click", (e) => {
        
        sub -= newArray[i].price;
        elSub.textContent = sub.toFixed(2);
        
        tax = sub * 10 / 100;
        elTax.textContent = tax.toFixed(2);
        
        total = (sub + tax);
        elTotal.textContent = total.toFixed(2);

        e.target.parentNode.parentNode.remove();
      });
    }
  });
}