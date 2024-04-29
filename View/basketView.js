function basketView() {
    return `
    <div>${showHeader()}</div>

    <div class = "basketContainer">
    
    
    
    <div class = "basketItemContainer">Handlekurv</div>
    <div class = "basketItemContainer">

    

    <div>${drawCart()}</div>
    </div>
    </div>
    `


}

function drawCart(){

    let cartHtml = "";

    for (counter = 0; counter < model.input.basket.length; counter++) {
        
        let item =  finditem(model.input.basket[counter].itemId);
        let toppings =  findtopping(model.input.basket[counter].itemId);
        let count = model.input.basket[counter].count

        cartHtml += /*html*/ `
        <div class = "item-container"><div>Navn: ${item.name} </div>

        <img class = "image-container" src = "${item.image}"/>

        <div>${toppings.name} Antall: <button onclick = "increaseItemCount(${counter})">+</button>
        
        ${count}

        <button onclick = "decreaseItemCount(${counter})">-</button>

        Pris ${item.price * count + toppings.price * count}Kr</div></div>`

    }

    
    return cartHtml;

} function finditem(element){

   return model.data.items.find((item) =>  element == item.id);

} function findtopping(e){

    return model.data.toppings.find((topping) => e == topping.id)

}
