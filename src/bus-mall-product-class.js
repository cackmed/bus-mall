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
    removeProductsByID(productsId) {
        this.products.forEach(products => {
            if (productsId === products.id) {
                this.products.splice(products.id, 1);
            }
        });

    }
    productsInArray() {
        return this.products.length;
    }
    getRandomProduct() {
        const getRandomProduct = Math.floor(Math.random() * this.products.length);
        return this.products[getRandomProduct];
    }
} 

