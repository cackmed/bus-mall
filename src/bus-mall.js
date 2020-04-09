import products from './product-list.js';
import { ProductArray } from './bus-mall-product-class.js';

const radioImage = document.querySelectorAll('img');
const radioInput = document.querySelectorAll('input');
const masterproductArray = new ProductArray(products);
const clickArray = [];
const dataTrackedArray = [];

function trackClick(productID) {
    let track = masterproductArray.getProductsById(clickArray, productID);
    if (!track) {
        track = {
            id: productID,
            numOfTimesClicked: 1,
            
        };
        clickArray.push(track);
    } else {
        track.numOfTimesClicked++;
        return;
    }
    const clickJson = JSON.stringify(clickArray);
    localStorage.setItem('clickArray', clickJson);
}
function trackShown(productID) {
    let tracked = masterproductArray.getProductsById(dataTrackedArray, productID);
    if (!tracked) {
        tracked = {
            id: productID,
            numOfTimesShown: 1,
            
        };
        dataTrackedArray.push(tracked);
    } else {
        tracked.numOfTimesShown++;
        return;
    }
    const showenJson = JSON.stringify(dataTrackedArray);
    localStorage.setItem('dataTrackedArray', showenJson);
}

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
            trackShown(randomProduct.id);
        } else if (i === 0) {
            imageTag.src = '../assets/' + randomProduct2.image;
            trackShown(randomProduct2.id);
        } else if (i === 2) {
            imageTag.src = '../assets/' + randomProduct3.image;
            trackShown(randomProduct3.id);
        }    
    });
    radioInput.forEach((radioTag, i) => {
        if (i === 1) {
            radioTag.value = randomProduct.id;
        } else if (i === 0) {
            radioTag.value = randomProduct2.id;
        } else if (i === 2) {
            radioTag.value = randomProduct3.id;
        }
    });
};
let clicks = 25;
document.querySelector('button').addEventListener('click', productImageIntialization);
productImageIntialization();
radioInput.forEach((radioTag) => {
    const radioElement = radioTag.value;
    radioTag.addEventListener('click', () => {
        //const userSelection = radioElement;
        trackClick(radioElement);
        clicks--;
        if (clicks === 0) {
            document.location.href = './results/results.html';
            
        }
    });
});