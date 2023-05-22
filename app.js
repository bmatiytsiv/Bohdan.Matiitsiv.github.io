let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Гіпсокартон  Рігіпс',
        image: '1.PNG',
        price: 450.00 
    },
    {
        id: 2,
        name: 'Гіпсокартон Knauf',
        image: '2.PNG',
        price: 310.00 
    },
    {
        id: 3,
        name: 'Гіпсокартон Белгіпс',
        image: '3.PNG',
        price: 120.00 
    },
    {
        id: 4,
        name: 'Гіпсокартон Knauf ',
        image: '4.PNG',
        price: 139.00 
    },
    {
        id: 5,
        name: 'K-5 Будмікс',
        image: '5.PNG',
        price: 20.00 
    },
    {
        id: 6,
        name: 'Клей Dufa ПВА 250 мл',
        image: '6.PNG',
        price: 190.00 
    },
    {
        id: 7,
        name: 'Клей  Cerasit CM-11',
        image: '7.PNG',
        price: 325.00 
    },
    {
        id: 8,
        name: 'Siniat Plato Finish',
        image: '8.PNG',
        price: 350.00 
    },
    {
        id: 9,
        name: 'Knauf MP 75',
        image: '9.PNG',
        price: 350.00 
    },
    {
        id: 10,
        name: 'Knauf Rotband',
        image: '10.PNG',
        price: 325.00 
    },
    {
        id: 11,
        name: 'Knauf шпаклівка Start',
        image: '11.PNG',
        price: 350.00 
    },
    {
        id: 12,
        name: 'Kreisel 220',
        image: '12.PNG',
        price: 350.00 
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()} Гривень</div>
            <button onclick="addToCard(${key})">Добавити в кошик</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    console.log(key, quantity);
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}