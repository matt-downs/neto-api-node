const sharedModule = require('./shared');
const itemModule = require('./modules/item');


class Neto {
    constructor(options) {
        sharedModule.init(options);
        
        this.getProducts = itemModule.getItem;
    }
}


module.exports = Neto;