function increaseItemCount(counter){
    model.input.basket[counter].count ++;
    
    updateView()
    }
    
    
    function decreaseItemCount(counter){

        if(model.input.basket[counter].count == 0){
            return
        } else{
            model.input.basket[counter].count --;
            updateView()
        }
    }