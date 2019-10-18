//IMPORT MODULES under test here:
//import example from '../src/example.js';
import { ProductArray } from '../src/bus-mall-product-class.js';
import products from '../src/product-list.js';

const test = QUnit.test;

test('Testing that getProductsById method returns product id', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const masterproductArray = new ProductArray(products);
    //Act 
    // Call the function you're testing and set the result to a const
    const result = masterproductArray.getProductsById('placeHolder1', products);
    //Assert

    // Make assertions about what is expected valid result
    assert.deepEqual(result, products[0]);
});
