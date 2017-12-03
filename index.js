const sharedModule = require('./shared');
const itemModule = require('./modules/item');
const orderModule = require('./modules/order');
const customerModule = require('./modules/customer');
const categoryModule = require('./modules/category');
const contentModule = require('./modules/content');
const cartModule = require('./modules/cart');


class Neto {
    constructor(options) {
        sharedModule.init(options);
        
        this.item = itemModule;
        this.order = orderModule;
        this.customer = customerModule;
        this.category = categoryModule;
        this.content = contentModule;
        this.cart = cartModule;
    }
}


module.exports = Neto;