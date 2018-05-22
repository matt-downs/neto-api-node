import cartModule = require("./modules/cart");
import categoryModule = require("./modules/category");
import contentModule = require("./modules/content");
import currencyModule = require("./modules/currency");
import customerModule = require("./modules/customer");
import itemModule = require("./modules/item");
import orderModule = require("./modules/order");
import paymentModule = require("./modules/payment");
import rmaModule = require("./modules/rma");
import shippingModule = require("./modules/shipping");
import supplierModule = require("./modules/supplier");
import voucherModule = require("./modules/voucher");
import warehouseModule = require("./modules/warehouse");

import sharedModule = require("./shared");

export class NetoAPI {
  public item = itemModule.methods;
  public order = orderModule.methods;
  public customer = customerModule.methods;
  public category = categoryModule.methods;
  public content = contentModule.methods;
  public cart = cartModule.methods;
  public supplier = supplierModule.methods;
  public voucher = voucherModule.methods;
  public warehouse = warehouseModule.methods;
  public rma = rmaModule.methods;
  public shipping = shippingModule.methods;
  public currency = currencyModule.methods;
  public payment = paymentModule.methods;

  constructor(options: sharedModule.InitOptions) {
    sharedModule.init(options);
  }
}
