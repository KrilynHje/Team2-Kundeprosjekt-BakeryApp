// navigateToToppings()
function toppingsView() {
    let html = ""
    html += /*HTML*/
        `
        <div class="page">
        ${showHeader()}
        <div class="topping-group">
            <div style="display: flex;">
                <img class="topping-image" src="${model.data.items[model.app.chosenProduct].image}">
                <div>
                    <h3>${model.data.items[model.app.chosenProduct].name}</h2>
                    <p>fra ${model.data.items[model.app.chosenProduct].price}kr</p>
                </div>
            </div>
        <div class="topping-controls">
        <div>Velg pålegg:</div>
        ${displayToppings()}
        </div>
        <div class="topping-summary-and-buttons" style="display: flex; flex-direction: column; align-items: center;">
        ${getTotalCountPriceToppings()}
        ${makeBasketButtonsAndComment()}
     
        </div>
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

function addOrRemoveCountItem(operator) {
    if (model.input.totalProductAmount == null) model.input.totalProductAmount = 1

    if (operator === '+') {
        model.input.totalProductAmount++;
    } else if (operator === '-' && model.input.totalProductAmount > 1) {
        model.input.totalProductAmount--;
    }
    updateView()
}

function getTotalCountPriceToppings() {
    let itemPrice = model.data.items[model.app.chosenProduct].price * model.input.totalProductAmount
    let toppingsPrice = 0
    model.input.chosenToppings.forEach((e) => {
        toppingsPrice += model.data.toppings.find((t) => t.id == e.id).price * e.count
    })
    return `
    <div class="topping-element">Totalt:&nbsp; 
        ${showToppingCountButton('-', 0, 'addOrRemoveCountItem')}
        <div> ${model.input.totalProductAmount} stk.| ${itemPrice + toppingsPrice}kr</div>
        ${showToppingCountButton('+', 0, 'addOrRemoveCountItem')}
    </div>
    `
}

function showToppingCountButton(operator, id, functionName) {
    return `
        <button class="topping-button" onclick="${functionName}('${operator}', ${id})">${operator}</button>
    `
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
            html +=/*HTML*/ `
            <div class="topping-element">
                ${showToppingCountButton('-', topping.id, 'addOrRemoveCount')}
                <div class="topping-input-field">${model.input.chosenToppings.find((e) => e.id == topping.id).count ?? 0}</div>
                ${showToppingCountButton('+', topping.id, 'addOrRemoveCount')}
                <div class="topping-name">${topping.name}</div>
            </div>
            `
        }
    }
    return html

}

function makeBasketButtonsAndComment() {
    let html = ``
    html += /*HTML*/`
    <div class="basket-buttons-container">
        <input type="text" placeholder="Legg til en Kommentar..">
        
        <div class="basket-buttons">
        <button class="takeout-button"onclick="pushToBasketOrCheckout('basket')">Handle mer </button>
        <button class="takeout-button"onclick="pushToBasketOrCheckout('checkout')">Gå til kassen </button>
        </div>
    </div>
    `

    return html
}

function pushToBasketOrCheckout(destination) {
    let toppings = model.input.chosenToppings
    let count = model.input.totalProductAmount
    let item = model.data.items.find((e) => e.id == model.app.chosenProduct)

    let basketItem = {
        itemId: item.id,
        count: count,
        selectedTopping: toppings,
        comment: "",
    }

    model.input.basket.push(basketItem)

    model.input.chosenToppings = []
    model.input.totalProductAmount = 1
    model.app.chosenProduct = null

    switch (destination) {
        case 'checkout':
            navigateToCheckout()
            break
        case `basket`:
            navigateToMain()
            break
    }
}
