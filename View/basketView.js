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
        
        let item =  dummy(model.input.basket[counter].itemId);

        cartHtml += `<div>Navn: ${item.name} </div>`

    }

    
    return cartHtml;

} function dummy(element){

   return model.data.items.find((pram) =>  element == pram.id);

}