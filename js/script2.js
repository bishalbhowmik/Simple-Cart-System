console.log('File connected')
function updateValue(n,inputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseInt(input.value);

    let newInputValue;
    
    if (n) {
        newInputValue = inputValue + 1;
    }
    else {
        newInputValue = inputValue - 1;
    }
    input.value = newInputValue;

    return newInputValue;
}

function productPrice(totalProduct) {
    const price = document.getElementById('m-price');
    const total = 1219 * totalProduct;
    price.innerText =total;
    return total;
}

function casePrice(totalProduct) {
    const price = document.getElementById('c-price');
    const total= 59 * totalProduct;
    price.innerText =total;
    return total;
}

function prevSubtotal (){
    const prevSubtotal =document.getElementById('subtotal');
    const prevSubtotalValue = parseInt(prevSubtotal.innerText);
    return prevSubtotalValue;
}


//Mobile


document.getElementById('btn-plus').addEventListener('click', function () { 
    const totalProduct = updateValue(true,'input-value');
   const price =  productPrice(totalProduct);
   const prev =document.getElementById('subtotal');
    // const prevSubtotalValue = prevSubtotal();
    // const total = prevSubtotalValue+price;
    // prevSubtotal.innerText = total;

    console.log(prevSubtotal());
})

document.getElementById('btn-minus').addEventListener('click', function () {
    const totalProduct = updateValue(false,'input-value');
    productPrice(totalProduct)

})


// Case 

document.getElementById('btn-cart-plus').addEventListener('click', function () {
    const totalProduct = updateValue(true,'cart-input');
    const totalPrice =(casePrice(totalProduct));
})

document.getElementById('btn-cart-minus').addEventListener('click', function () {
    const totalProduct =updateValue(false,'cart-input');
    const totalPrice =casePrice(totalProduct);
})