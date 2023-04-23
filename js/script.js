console.log('File Connected')

//    const input= document.getElementById('input-value');
   
//    input.value= 4;

function updatePlusNum (inputId,priceId){
    const input= document.getElementById(inputId);  
    const inputValue= parseInt(input.value);

    const newInput = inputValue+1;
    input.value= newInput;

    const mobile = document.getElementById(priceId);
    const mobilePrice = 1219*newInput;

    mobile.innerText = mobilePrice;
   
}

function updateMinusNum (inputId,priceId){
    const input= document.getElementById(inputId);  
    const inputValue= parseInt(input.value);

    const newInput = inputValue-1;
    input.value= newInput;

    const mobile = document.getElementById(priceId);
    const mobilePrice = 1219*newInput;

    mobile.innerText = mobilePrice;
   
}

function total(){
    const total = 
}

document.getElementById('btn-plus').addEventListener('click',function(){
    updatePlusNum('input-value','m-price');

})





document.getElementById("btn-minus").addEventListener('click',function(){
    // const input = document.getElementById('input-value');
    // const inputValue = parseInt(input.value);
    // const newInputValue= inputValue -1;
    // input.value= newInputValue;

    // // Update Price

    // const mobile = document.getElementById('m-price');
    // const mobilePrice = 1219*newInputValue;

    // console.log(mobilePrice);
    // mobile.innerText = mobilePrice;

    updateMinusNum('input-value','m-price');

})


document.getElementById('btn-cart-plus').addEventListener('click',function(){
    // const input = document.getElementById('cart-input');
    // const inputValue = parseInt(input.value);
    // const newValue = inputValue+1;
    // input.value= newValue;

    // // update Price 
    // const cart = document.getElementById('c-price');
    // const cartValue = parseInt(cart.innerText);

    // const cartPrice = 59*newValue;

    // cart.innerText =cartPrice;

    // console.log(cartPrice);

    updatePlusNum('cart-input','c-price');

    // const subtotal = document.getElementById('subtotal');

    // const subtotalValue = parseInt(subtotal.innerText)+cartPrice;
    // console.log(subtotalValue);

    // subtotal.innerText = subtotalValue;



})

document.getElementById('btn-cart-minus').addEventListener('click',function(){
//     const input = document.getElementById('cart-input');
//     const inputValue = parseInt(input.value);
//     const newInputValue = inputValue-1;

//     input.value = newInputValue;
    
//     // Update Price
//     const cart = document.getElementById('c-price');
//     const cartPrice = 59*newInputValue;

//    cart.innerText = cartPrice;

updateMinusNum('cart-input','c-price')
})