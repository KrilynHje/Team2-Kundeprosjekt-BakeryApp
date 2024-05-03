// navigateToToppings()
function toppingsView() {

    let html = ""
    html += /*HTML*/
        `
        <div class="page">
        ${showHeader()}
        <img src="${model.data.items[model.app.chosenProduct].image}">
        <div></div>
        <div class="checkout-page-align-grid">
        
        ${displayToppings()}
     
        </div>  
    </div>
    `
    return html
}

function addOrRemoveCount(operator, id) {
    let topping = model.input.chosenToppings.find((t) => t.id == id)
    if (operator === '+') {
        topping.count++;
    } else if (operator === '-' && topping.count > 0) {
        topping.count--;
    }
    updateView()
}



function displayToppings() {
    let html = ``

    for (let i = 0; i < model.data.toppings.length; i++) {
        const topping = model.data.toppings[i];
        if (topping.productType == model.data.items[model.app.chosenProduct].productType) {
            if (!model.input.chosenToppings.find((t) => t.id == topping.id))
                model.input.chosenToppings.push(
                    {
                        id: topping.id,
                        count: 0,
                    })
            html += `<button onclick="addOrRemoveCount('-', ${topping.id})">-</button>
            <input type="number" value="${model.input.chosenToppings[i].count ?? 0}">
    <button onclick="addOrRemoveCount('+', ${topping.id})">+</button>
    <div>${topping.name}</div>`
        }
    }
    return html

}

// function pushToBasket() {



// }

// function navigateFromMain() {
//     //onclick til main view som navigerer til toppings view
//     navigateToToppings()
// }








