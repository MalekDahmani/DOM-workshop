

 const like= document.querySelectorAll('i');
 for (let i of like){
    i.addEventListener('click',function(){
        i.style.color="pink";
    })
 }

 let carts= document.querySelectorAll('.addcart');

 products=[
    {
        name: 'ESP LTD Arrow-1000 CARS',
        tag: '16335708_800',
        price:1066,
        inCart:0

    },
    {
        name: 'Dean Guitars Dimebag Dime From Hell BLB LH',
        tag: '14439654_800',
        price:596,
        inCart:0

    },
    {
        name: 'Schecter Synyster Gates Custom S BKGD',
        tag: '13403541_800',
        price:1275,
        inCart:0

    },
    {
        name: 'ESP E-II Horizon-III FM RDB',
        tag: '11731215_800',
        price:1699,
        inCart:0

    },
    {
        name: 'Gibson Explorer Antique Natural',
        tag: '14533438_800',
        price:1429,
        inCart:0

    },
    {
        name: 'ESP LTD Alexi Hexed Sawtooth',
        tag: '17242158_800.jpg',
        price:1266,
        inCart:0

    },
    {
        name: 'Jackson RRX24 Rhoads X Ser. Black Camo',
        tag: '17302534_800',
        price:1148,
        inCart:0

    },
    {
        name: 'Jackson JS32 Warrior AH SW',
        tag: '13979546_800',
        price:360,
        inCart:0

    },

 ]

 for (let i=0; i<carts.length;i++){
    carts[i].addEventListener('click',function(){
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
 }

 function OnLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers){
        document.querySelector('.cart span').textContent= productNumbers;
    }

 }

 function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
    if (productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.cart span').textContent=productNumbers+ 1;
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent=1;
    }
    setItems(product)

}

function setItems(product){
let cartItems=localStorage.getItem('productsInCart');
cartItems=JSON.parse(cartItems);

 if (cartItems!=null){
    if (cartItems[product.tag]== undefined){
         cartItems={
           ...cartItems,
           [product.tag]:product 
         }
    }
    cartItems[product.tag].inCart+=1;
 }else{
     
 product.inCart=1;
 cartItems={
    [product.tag]:product
 }
 }
localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}


function totalCost(product){
   let cartCost=localStorage.getItem('totalCost') ;
   
   if(cartCost!=null){
    cartCost= parseInt(cartCost);
     localStorage.setItem("totalCost",cartCost+ product.price);
   }else{
    localStorage.setItem("totalCost",product.price);
   }
}

function displayCart(){
let cartItems=localStorage.getItem("productsInCart");
cartItems= JSON.parse(cartItems);
let productContainer= document.querySelector('.products');
let cartCost=localStorage.getItem('totalCost') ;
if(cartItems && productContainer){
    productContainer.innerHTML='';
    Object.values(cartItems).map(item => {
    productContainer.innerHTML+=`
    <div class="product">
    <i class="fa-solid fa-trash"></i>
    <img src="./img/${item.tag}.jpg">
    <span>${item.name}</span>
    </div>
    
    <div class="price">
    ${item.price}
    </div>
    <div class="quantity">
    <i class="fa-solid fa-circle-left"></i>
    <span>${item.inCart}</span>
    <i class="fa-solid fa-circle-right"></i>
    </div>
    <div class="total">
    $${item.inCart * item.price},00
    </div>
    
    `;
    });

    productContainer.innerHTML+= `
    <div class="basketTotalContainer">
    <h4 class="basketTotalTitle">Basket Total</h4>
    <h4 class="basketTotal">$${cartCost},00</h4>
    </div>
    `

}

}


 OnLoadCartNumbers();
 displayCart();


 document.querySelector()