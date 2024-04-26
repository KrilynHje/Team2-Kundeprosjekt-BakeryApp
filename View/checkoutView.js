function checkSunday(){

    if (futureDate.getDay() === 0) {
        return true;
    } else {
        return false;
    }

}
var today = new Date().toISOString().split('T')[0];
function checkoutView() {
    let html = ""
    html += /*HTML*/
        `
       
        <div class="page">

        ${showHeader()}
        <div class="checkout-Container">
        <div class="checkout-page-align-flex">
        ${makeTakeoutButtons()}
        </div>
        <br>
        <div class="checkout-page-align-grid">
        <p>Vennligst velg dato og hentetidspunkt</p>
        </div>
        <div class="checkout-page-align-flex">
     <input oninput="inputDate(this.value)" value="${model.input.checkout.date}" type="date" min="${today}"/>
    <input onchange="inputTime(this.value)" value="${model.input.checkout.time}" type="time" />
    </div>
    </div>
    <br>
    <div class="checkout-page-align-grid">
    <input onchange="nameInput(this.value)" placeholder="Navn Etternavn" value="${model.input.checkout.name ?? ''}"  type="text" >
    <input onchange="numberInput(this.value)" placeholder="Telefon nummer"value="${model.input.checkout.number}" type="number">
    </div>
    
    <div class="checkout-page-align-grid">
    ${makeConfirmButton()}
    
    </div>
    </div>
    `
    return html
}


function checkInputs() {
    return model.input.checkout.name != null && 
        model.input.checkout.number != null && 
        model.input.checkout.date != null &&
        model.input.checkout.time != null 
}



function makeConfirmButton() {
    if (checkInputs())
        return `<button class="checkout-button" onclick="confirmOrder()">Bekreft</button>`
    return `<button disabled="true">Bekreft</button>`
}

function confirmOrder(){
    newOrder()
    navigateToOrdrerConfirmed()
}

function newOrder(){
    let id = model.data.orders[model.data.orders.length -1].orderId +1; 
    let order = {
        orderId: id,
        date: model.input.checkout.date,
        time: model.input.checkout.time,
        name: model.input.checkout.name,
        number: model.input.checkout.number, // 8-)
        products: model.input.basket,
    }
    model.input.checkout.date = null
    model.input.checkout.time = null
    model.input.checkout.name = null
    model.input.checkout.number = null
    let newOrder = model.data.orders.push(order)
    model.input.basket = []  //hvorfor funka det ikke å bruke index 0 for å cleare her ??!!
    model.input.currentOrder = id
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











