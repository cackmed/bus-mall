import products from './product-list.js';
import { ProductArray } from './bus-mall-product-class.js';

const radioImage = document.querySelectorAll('img');
const radioInput = document.querySelectorAll('input');
const productName = document.getElementById('product-name'); 
const productArray = new ProductArray(products);
let quanity = 0;

radioInput.forEach((radioTag) => {
    radioTag.addEventListener('click', (event) => {
    });
});

const productImageIntialization = () => {
    
    const randomProduct = productArray.getRandomProduct();
    let randomProduct2 = productArray.getRandomProduct();
    let randomProduct3 = productArray.getRandomProduct();
    console.log(randomProduct);
    console.log(randomProduct2);
    console.log(randomProduct3);

    while (randomProduct.id === randomProduct2.id) {
        randomProduct2 = productArray.getRandomProduct();
    }
    while (randomProduct.id === randomProduct3.id || randomProduct3.id === randomProduct2.id) {
        randomProduct3 = productArray.getRandomProduct();
    }
    radioImage.forEach((imageTag, i) => {
        if (i === 1) {
            imageTag.src = '../assets/' + randomProduct.image;
        } else if (i === 0) {
            imageTag.src = '../assets/' + randomProduct2.image;
        } else if (i === 2) {
            imageTag.src = '../assets/' + randomProduct3.image;
        }
    });
    radioInput.forEach((radioTag, i) => {
        if (i === 1) {
            radioTag.value = randomProduct.id;
        } else if (i === 0) {
            radioTag.calue = randomProduct2.id;
        } else if (i === 2) {
            radioTag.value = randomProduct3.id;
        }
    });
};

document.querySelector('button').addEventListener('click', productImageIntialization);

productImageIntialization();