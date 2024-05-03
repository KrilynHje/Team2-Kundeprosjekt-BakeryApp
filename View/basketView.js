function basketView() {
    return `
    <div>${showHeader()}</div>

    <div>
    
    
    
    <div class = "basketItemContainer">Handlekurv</div>
    <div class = "basketItemContainer">

    

    <div>${drawCart()}</div>
    </div>
    </div>
    `


}

function drawCart() {

    let cartHtml = "";
    let totalprice = 0;

    for (counter = 0; counter < model.input.basket.length; counter++) {

        let item = finditem(model.input.basket[counter].itemId);
        let toppings = findtopping(model.input.basket[counter].itemId);
        let count = model.input.basket[counter].count

        cartHtml += /*html*/ `
        <div class = "item-container"><div>Navn: ${item.name} </div>

        <img class = "image-container" src = "${item.image}"/>

        <div>
        ${toppings.name} Antall: <button onclick = "decreaseItemCount(${counter})">-</button>
        
        ${count}

        <button onclick = "increaseItemCount(${counter})">+</button>

        <div>Pris ${item.price * count + toppings.price * count}Kr</div></div>
        `

    }
    cartHtml += `<div>Total pris ${getBasketTotalPrice()}Kr <button class = "takeout-button" onclick = "navigateToCheckout()">Til kassen</button></div>`

    return cartHtml;

} function finditem(element) {

    return model.data.items.find((item) => element == item.id);

} function findtopping(e) {

    return model.data.toppings.find((topping) => e == topping.id)

}
