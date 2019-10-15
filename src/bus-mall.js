import { products } from './product-list.js';
import { ProductArray } from './bus-mall-product-class.js';

const radioImage = document.querySelectorAll('img');
const radioInput = document.querySelectorAll('input');
const productName = document.getElementById('product-name'); 
const productArray = new ProductArray(products);