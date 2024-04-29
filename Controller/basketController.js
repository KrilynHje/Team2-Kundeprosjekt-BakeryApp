function increaseItemCount(counter){
    model.input.basket[counter].count ++;
    
    updateView()
    }
    
    
    function decreaseItemCount(counter){
        model.input.basket[counter].count --;
        updateView()
    }