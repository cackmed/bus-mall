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
    removeByID(productsId) {
        const list = this.products;
        for (let i = 0; i < list.length; i++) {
            const products = list[i];
            if (products.id === productsId) {
                list.splice(i, 1);
            }
        }

    }
    productsInArray() {
        return this.products.length;
    }
    getRandomProduct() {
        const getRandomProduct = Math.floor(Math.random() * this.products.length);
        return this.products[getRandomProduct];
    }
} 

