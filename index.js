const sharedModule = require('./shared');
const itemModule = require('./modules/item');
const orderModule = require('./modules/order');
const customerModule = require('./modules/customer');
const categoryModule = require('./modules/category');
const contentModule = require('./modules/content');
const cartModule = require('./modules/cart');
const supplierModule = require('./modules/supplier');
const voucherModule = require('./modules/voucher');
const warehouseModule = require('./modules/warehouse');
const rmaModule = require('./modules/rma');
const shippingModule = require('./modules/shipping');
const currencyModule = require('./modules/currency');
const paymentModule = require('./modules/payment');



class Neto {
    constructor(options) {
        sharedModule.init(options);
        
        this.item = itemModule;
        this.order = orderModule;
        this.customer = customerModule;
        this.category = categoryModule;
        this.content = contentModule;
        this.cart = cartModule;
        this.supplier = supplierModule;
        this.voucher = voucherModule;
        this.warehouse = warehouseModule;
        this.rma = rmaModule;
        this.shipping = shippingModule;
        this.currency = currencyModule;
        this.payment = paymentModule;
    }
}


module.exports = Neto;