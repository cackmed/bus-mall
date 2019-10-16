import products from './product-list.js';
import { ProductArray } from './bus-mall-product-class.js';

const radioImage = document.querySelectorAll('img');
const radioInput = document.querySelectorAll('input');
const productName = document.getElementById('product-name'); 
const masterproductArray = new ProductArray(products);
let clicks = 0;

radioInput.forEach((radioTag) => {
    radioTag.addEventListener('click', (event) => {
        const radioElement = event.target;
        const userSelection = products.id === radioElement.value;
        if (userSelection) {
            masterproductArray.removeProductsByID(products.id);
        }
    });
});

export const productImageIntialization = () => {
    
    const randomProduct = masterproductArray.getRandomProduct();
    let randomProduct2 = masterproductArray.getRandomProduct();
    let randomProduct3 = masterproductArray.getRandomProduct();
    while (randomProduct.id === randomProduct2.id) {
        randomProduct2 = masterproductArray.getRandomProduct();
    }
    while (randomProduct.id === randomProduct3.id || randomProduct3.id === randomProduct2.id) {
        randomProduct3 = masterproductArray.getRandomProduct();
    }
    radioImage.forEach((imageTag, i) => {
        if (i === 1) {
            imageTag.src = '../assets/' + randomProduct.image;
        } else if (i === 0) {
            imageTag.src = '../assets/' + randomProduct2.image;
        } else if (i === 2) {
            imageTag.src = '../assets/' + randomProduct3.image;
        }
        console.log(randomProduct);
        console.log(randomProduct2);
        console.log(randomProduct3);
    
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