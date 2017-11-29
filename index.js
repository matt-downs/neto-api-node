const sharedModule = require('./shared');
const itemModule = require('./modules/item');


class Neto {
    constructor(options) {
        sharedModule.init(options);
        
        this.item = itemModule;
    }
}


module.exports = Neto;