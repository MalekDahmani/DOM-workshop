const like= document.querySelectorAll('i');
for (let i of like){
   i.addEventListener('click',function(){
       i.style.color="pink";
   })
}

if (document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else {
        ready();
}


function ready(){
    let removeCarItemButtons =document.getElementsByClassName('btn-danger');
    for (let button of removeCarItemButtons){
         button.addEventListener('click',removeCartItem)
       }
       let quantityInput= document.getElementsByClassName('cart-quantity-input')
       for (let input of quantityInput){
        input.addEventListener('change',quantityChanged)
       }
    } 



function removeCartItem(event){
    let buttonClicked= event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event){
   let input= event.target
   if(isNaN(input.value)||input.value<=0){
    input.value=1
   }
   updateCartTotal()
}


function updateCartTotal(){
 let cartItemContainer= document.getElementsByClassName('cart-items')[0]
 let cartRows= cartItemContainer.getElementsByClassName('cart-row')
 let total=0
 for (let i=0;i<cartRows.length;i++){
    let cartRow=cartRows[i];
    priceElement=cartRow.getElementsByClassName('cart-price')[0]
    let quantityElement= cartRow.getElementsByClassName('cart-quantity-input')[0]
    let price= parseFloat( priceElement.innerText.replace('$',''))
    let quantity=quantityElement.value
    total=total+ (price*quantity)
 }
 document.getElementsByClassName('cart-total-price')[0].innerText= '$'+total
}