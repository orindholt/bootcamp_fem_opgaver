document.addEventListener("DOMContentLoaded", () => {
    let shirtPrice = 150;
    let sweaterPrice = 250;
    let jacketPrice = 400;
    let total = 0;
    let result = 0;

    const productsObj = {
        products : [
            {
                name : "Shirt",
                price : shirtPrice,
                image : "img/shirt",
                amount : 0
            },{
                name : "Sweater",
                price : sweaterPrice,
                image : "img/sweater",
                amount : 0
            },{
                name : "Jacket",
                price : jacketPrice,
                image : "img/jacket",
                amount : 0
            }
        ]
    }
    let container;
    let nameElement;
    let priceElement;
    let imgElement;
    let amountContainer;
    let amountElement;
    let plusBtnElement;
    let minusBtnElement;

    function createProductElement(i){
        container = document.createElement("div");
        nameElement = document.createElement("h2");
        priceElement = document.createElement("p");
        imgElement = document.createElement("img");
        amountContainer = document.createElement("div");
        amountElement = document.createElement("p");
        plusBtnElement = document.createElement("button");
        minusBtnElement = document.createElement("button");

        document.querySelector("#container").append(container);
        container.append(nameElement);
        container.append(priceElement);
        container.append(imgElement);
        container.append(amountContainer);
        amountContainer.setAttribute("class", "btn-container");
        amountContainer.append(plusBtnElement);
        plusBtnElement.append("+");
        plusBtnElement.setAttribute("class", "plusBtn");
        amountContainer.append(amountElement);
        amountElement.textContent = productsObj.products[i].amount;
        amountElement.setAttribute("class", "amount");
        amountContainer.append(minusBtnElement);
        minusBtnElement.append("-");
        minusBtnElement.setAttribute("class", "minusBtn");
    }

    let totalElement = document.createElement("p");
    document.querySelector("body").append(totalElement);
    totalElement.id = "total";

    for (let i = 0; i < productsObj.products.length; i++) {
        createProductElement(i);
        updateProductElement(i);
        
    }

    function updateProductElement(i){
        const priceElements = document.querySelectorAll(".amount");
        nameElement.textContent = `Name: ${productsObj.products[i].name}`;
        priceElement.textContent = `Price: ${productsObj.products[i].price}`;
        imgElement.setAttribute("src", productsObj.products[i].image + ".jpg");
        /* amountElement.textContent = productsObj.products[i].amount; */
        productsObj.products[i].amount = parseInt(priceElements[i].textContent); 
        totalElement.textContent = `Total: ${total}kr`;
    }

    function changeTotal(){
        for (let i = 0; i < productsObj.products.length; i++) {
            total = 0;
            total += productsObj.products[i].amount * productsObj.products[i].price;
        }
        totalElement.textContent = `Total: ${total}kr`;
    }



    const buttons = document.querySelectorAll(".plusBtn, .minusBtn");

    buttons.forEach(button => {
        button.addEventListener("click", (e)=>{
            if(e.target.getAttribute("class")=="plusBtn"){
                e.target.nextElementSibling.textContent++;
            } else if(e.target.getAttribute("class")=="minusBtn"){
                if(e.target.previousElementSibling.textContent > 0){
                    e.target.previousElementSibling.textContent--;
                }
            }
            for (let i = 0; i < productsObj.products.length; i++) {
                updateProductElement(i);
            }
            changeTotal();
            console.log(productsObj);
        });
    });
}); // DOM loader end