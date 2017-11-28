const sharedModule = require('./shared');
const productModule = require('./modules/products');


class Neto {
    constructor(options) {
        sharedModule.init(options);

        this.getProducts = productModule.getProducts;
    }
}


module.exports = Neto;