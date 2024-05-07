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

// {
//     itemId: item.id,
//     count: count,
//     selectedTopping: [
//            {
//                  id: 0,
//                  count: 1,
//            }
//        ],
//     comment: "",
// }
// 🏴‍☠️🏴‍☠️🏋️🏴‍☠️🦜
// function testFind(arr){
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         const el = arr[i];
//         result.push([...model.data.toppings].find((t) => t.id == el.id))
//     }
//     return result
// }

function showToppingInfo(toppings) {
    let html = ``

    toppings.forEach((e) => {
        let topping = model.data.toppings.find((t) => t.id == e.id)
        if (e.count > 0)
            html += `<p>${topping.name}, x ${e.count}</p>`
    })

    return html
}

function drawCart() {

    let cartHtml = "";
    let totalprice = 0;

    for (counter = 0; counter < model.input.basket.length; counter++) {

        let item = finditem(model.input.basket[counter].itemId);
        // let toppings = testFind(model.input.basket[counter].selectedTopping)
        let toppings = findtopping(model.input.basket[counter].itemId);
        let count = model.input.basket[counter].count

        cartHtml += /*html*/ `
        <div class = "item-container"><div> ${item.name} </div>

        <img class = "image-container" src = "${item.image}"/>

        ${showToppingInfo(model.input.basket[counter].selectedTopping)}

        <div>
        ${toppings.name} Antall: <button class="topping-button" onclick = "decreaseItemCount()">-</button> ${counter}<button class="topping-button" onclick = "increaseItemCount()">+</button>

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
