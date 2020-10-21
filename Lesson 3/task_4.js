'use strict'

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

// Получить все товары, у которых есть фотографии
function isPhoto(obj) {
    return obj.photos !== undefined && obj.photos != '';
}

let result = products.filter(isPhoto);
console.log(result);

// Отсортируйте товары по цене (от низкой цены к высокой)
console.log(products.sort((prev, next) => prev.price - next.price));