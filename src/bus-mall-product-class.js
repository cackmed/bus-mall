export class ProductArray {
    constructor(products) {
        this.products = products.slice();
    }
    getProducts() {
        return this.products;
    }
    getProductsbyId(productId) {
        let productsMatch;

        this.products.forEach(products => {
            if (productId === products.id) {
                productsMatch = products;
            }
        });
        return productsMatch;
    }
    productsInArray() {
        return this.products.length;
    }
    getRandomProduct() {
        const getRandomProduct = Math.floor(Math.random() * this.products.length);
        return this.products[getRandomProduct];
    }
} 

