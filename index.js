
const configModule = require('./config');
const productModule = require('./modules/products');


function Neto(options) {
    configModule.init(options);
}
 

Neto.prototype.getProducts = productModule.getProducts;


module.exports = Neto;