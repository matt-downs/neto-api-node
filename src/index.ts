import * as cartModule from "./modules/cart";
import * as categoryModule from "./modules/category";
import * as contentModule from "./modules/content";
import * as currencyModule from "./modules/currency";
import * as customerModule from "./modules/customer";
import * as itemModule from "./modules/item";
import * as orderModule from "./modules/order";
import * as paymentModule from "./modules/payment";
import * as rmaModule from "./modules/rma";
import * as shippingModule from "./modules/shipping";
import * as supplierModule from "./modules/supplier";
import * as voucherModule from "./modules/voucher";
import * as warehouseModule from "./modules/warehouse";

import { init, InitOptions } from "./shared";

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

  constructor(options: InitOptions) {
    init(options);
  }
}
