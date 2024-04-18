
function checkoutView() {
    let html = ""
    html += /*HTML*/
        `
       
        
        ${showHeader()}
        <div class="checkout-Container">
        <div class="checkout-page-align">
        ${makeTakeoutButtons()}
        </div>
        <p>aøckøaskcøaskdølsakdølaksdølaskdølaskdølsad</p>
        <br>
    <input oninput="inputDate(this.value)" value="${model.input.checkout.date}" type="date"/>
    <input onchange="inputTime(this.value)" value="${model.input.checkout.time}" type="time"/>
    </div>
    <br>
    <input onchange="nameInput(this.value)" placeholder="Navn Etternavn" value="${model.input.checkout.name ?? ''}"  type="text" >
    <input onchange="numberInput(this.value)" placeholder="telefon nummer"value="${model.input.checkout.number}" type="number">
    <br>
    ${makeConfirmButton()}
    </div>
    `
    return html
};

function checkInputs() {
    return model.input.checkout.name != null && model.input.checkout.number != null
}


function makeConfirmButton() {
    if (checkInputs())
        return `<button class="checkout-button">Bekreft</button>`
    return `<button disabled="true">Bekreft</button>`
}

function makeTakeoutButtons() {
    let html = ""

    if (model.input.checkout.takeout === null) {
        html += `
        <button onclick="checkIfTakeout(true)">Ta med </button>
        <button onclick="checkIfTakeout(false)">Spise Inne</button>
        `
    }
    else if (model.input.checkout.takeout) {
        html += `
        <button class="takeout-button" onclick="checkIfTakeout(true)">Ta med </button>
        <button class="notChosen" onclick="checkIfTakeout(false)">Spise Inne</button>
        `
    }
    else if (!model.input.checkout.takeout) {
        html += `
        <button class="notChosen" onclick="checkIfTakeout(true)">Ta med </button>
        <button class="takeout-button" onclick="checkIfTakeout(false)">Spise Inne</button>
        `
    }

    return html

}



//

// function drawToppings() {
//     let html = ''
//     for (let i = 0; i < model.data.toppings.length; i++) {
//         html += `<div>${model.data.toppings[i].name}</div>`
//     }
//     return html
// }



