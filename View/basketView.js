function basketView() {
    return `
    <div class="page">
        <div>${showHeader()}</div>
        <div>
            <h2 style="margin:30px;" class = "basketItemContainer">Handlekurv</h2>
            <div class = "basketItemContainer">
                <div>${drawCart()}</div>
            </div>
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
            html += `<p style="margin-bottom: 0;">${topping.name} x ${e.count}</p>`
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
        <div class = "item-container">
            <div> ${item.name} </div>
            <img class = "image-container" src = "${item.image}"/>

            ${showToppingInfo(model.input.basket[counter].selectedTopping)}

            <div style="margin-top:15px;">
                Antall: 
                <button class="topping-button" onclick = "decreaseItemCount(${counter})">-</button> 
                ${count}
                <button class="topping-button" onclick = "increaseItemCount(${counter})">+</button>
            </div>
        </div>
        `

    }
    cartHtml += `
        <div>
            Total pris ${getBasketTotalPrice()}Kr 
            <button style="margin-top:15px;"class = "button takeout-button" onclick = "navigateToCheckout()">Til kassen</button>
        </div>
    `

    return cartHtml;

} function finditem(element) {

    return model.data.items.find((item) => element == item.id);

} function findtopping(e) {

    return model.data.toppings.find((topping) => e == topping.id)

}
