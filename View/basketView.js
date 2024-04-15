function basketView() {
    return `
    <div class="header">Pierre baguette</div>
    <div class = "container">${drawCart()}
        
        
        
        
        
        </div>
    <div class="footer">footer</div>
    `


}

function drawCart(){

    let cartHtml = "";

    for (counter = 0; counter < model.input.basket.length; counter++) {
        cartHtml += `<div class = "text">${cart[counter].id}</div>`

    }
    return cartHtml;
}