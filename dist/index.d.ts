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
declare const _default: {
    new (options: sharedModule.InitOptions): {
        item: {
            add: (data: any) => itemModule.AddItem;
            get: (filter: any) => itemModule.GetItem;
            update: (data: any) => itemModule.UpdateItem;
        };
        order: {
            add: (data: any) => orderModule.AddOrder;
            get: (filter: any) => orderModule.GetOrder;
            update: (data: any) => orderModule.UpdateOrder;
        };
        customer: {
            add: (data: any) => customerModule.AddCustomer;
            get: (filter: any) => customerModule.GetCustomer;
            update: (data: any) => customerModule.UpdateCustomer;
            addLog: (data: any) => customerModule.AddCustomerLog;
            updateLog: (data: any) => customerModule.UpdateCustomerLog;
        };
        category: {
            add: (data: any) => categoryModule.AddCategory;
            get: (filter: any) => categoryModule.GetCategory;
            update: (data: any) => categoryModule.UpdateCategory;
        };
        content: {
            add: (data: any) => contentModule.AddContent;
            get: (filter: any) => contentModule.GetContent;
            update: (data: any) => contentModule.UpdateContent;
        };
        cart: {
            get: (filter: any) => cartModule.GetCart;
        };
        supplier: {
            add: (data: any) => supplierModule.AddSupplier;
            get: (filter: any) => supplierModule.GetSupplier;
            update: (data: any) => supplierModule.UpdateSupplier;
        };
        voucher: {
            add: (data: any) => voucherModule.AddVoucher;
            get: (filter: any) => voucherModule.GetVoucher;
            update: (data: any) => voucherModule.UpdateVoucher;
        };
        warehouse: {
            add: (data: any) => warehouseModule.AddWarehouse;
            get: (filter: any) => warehouseModule.GetWarehouse;
            update: (data: any) => warehouseModule.UpdateWarehouse;
        };
        rma: {
            add: (data: any) => rmaModule.AddRma;
            get: (filter: any) => rmaModule.GetRma;
        };
        shipping: {
            getMethods: () => shippingModule.GetShippingMethods;
            getQuote: (data: any) => shippingModule.GetShippingQuote;
        };
        currency: {
            getSettings: () => currencyModule.GetCurrencySettings;
            updateSettings: (data: any) => currencyModule.UpdateCurrencySettings;
        };
        payment: {
            getMethods: () => paymentModule.GetPaymentMethods;
            get: (filter: any) => paymentModule.GetPayment;
            add: (data: any) => paymentModule.AddPayment;
        };
    };
};
export = _default;
