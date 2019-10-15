// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { ProductArray } from '../src/bus-mall-product-class.js';
import products from '../src/product-list.js';

const productArray = new ProductArray(products);
const test = QUnit.test;

test('Testing that ProductArray method getProductbyId returns product', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const productArray = new ProductArray(products);
    const getProduct = ProductArray.getProductbyId();
    //Act 
    // Call the function you're testing and set the result to a const
    getProduct();
    //Assert
    // Make assertions about what is expected valid result
    assert.eepEqual(getProduct, this.products);
});
