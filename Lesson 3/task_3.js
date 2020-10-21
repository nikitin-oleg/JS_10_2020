'use strict'

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

// С использованием метода forEach
let productsSaleOne = products.forEach(element => console.log(element.id + ' : ' + element.price * 0.85));


// С использованием цикла for of
let productSale = JSON.parse(JSON.stringify(products));

for (let itm of productSale) {
    itm.price *= 0.85;
}
console.log(productSale);
console.log(products);