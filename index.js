const sharedModule = require('./src/shared');
const itemModule = require('./src/modules/item');
const orderModule = require('./src/modules/order');
const customerModule = require('./src/modules/customer');
const categoryModule = require('./src/modules/category');
const contentModule = require('./src/modules/content');
const cartModule = require('./src/modules/cart');
const supplierModule = require('./src/modules/supplier');
const voucherModule = require('./src/modules/voucher');
const warehouseModule = require('./src/modules/warehouse');
const rmaModule = require('./src/modules/rma');
const shippingModule = require('./src/modules/shipping');
const currencyModule = require('./src/modules/currency');
const paymentModule = require('./src/modules/payment');


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