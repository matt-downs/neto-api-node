import sharedModule = require('./shared');
import itemModule = require('./modules/item');
import orderModule = require('./modules/order');
import customerModule = require('./modules/customer');
import categoryModule = require('./modules/category');
import contentModule = require('./modules/content');
import cartModule = require('./modules/cart');
import supplierModule = require('./modules/supplier');
import voucherModule = require('./modules/voucher');
import warehouseModule = require('./modules/warehouse');
import rmaModule = require('./modules/rma');
import shippingModule = require('./modules/shipping');
import currencyModule = require('./modules/currency');
import paymentModule = require('./modules/payment');


export = class Neto {
    constructor(options: sharedModule.InitOptions) {
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

    // TODO fix this
    item: any;
    order: any;
    customer: any;
    category: any;
    content: any;
    cart: any;
    supplier: any;
    voucher: any;
    warehouse: any;
    rma: any;
    shipping: any;
    currency: any;
    payment: any;
}