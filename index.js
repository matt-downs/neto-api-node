const sharedModule = require('./shared');
const itemModule = require('./modules/item');
const orderModule = require('./modules/order');


class Neto {
    constructor(options) {
        sharedModule.init(options);
        
        this.item = itemModule;
        this.order = orderModule;
    }
}


module.exports = Neto;