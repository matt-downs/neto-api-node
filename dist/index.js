"use strict";
const sharedModule = require("./shared");
const itemModule = require("./modules/item");
const orderModule = require("./modules/order");
const customerModule = require("./modules/customer");
const categoryModule = require("./modules/category");
const contentModule = require("./modules/content");
const cartModule = require("./modules/cart");
const supplierModule = require("./modules/supplier");
const voucherModule = require("./modules/voucher");
const warehouseModule = require("./modules/warehouse");
const rmaModule = require("./modules/rma");
const shippingModule = require("./modules/shipping");
const currencyModule = require("./modules/currency");
const paymentModule = require("./modules/payment");
module.exports = class Neto {
    constructor(options) {
        this.item = itemModule.methods;
        this.order = orderModule.methods;
        this.customer = customerModule.methods;
        this.category = categoryModule.methods;
        this.content = contentModule.methods;
        this.cart = cartModule.methods;
        this.supplier = supplierModule.methods;
        this.voucher = voucherModule.methods;
        this.warehouse = warehouseModule.methods;
        this.rma = rmaModule.methods;
        this.shipping = shippingModule.methods;
        this.currency = currencyModule.methods;
        this.payment = paymentModule.methods;
        sharedModule.init(options);
    }
};
