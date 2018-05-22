import GetModule = require("./methods/get");
import { ExecOptions } from "../shared";

export class GetCart extends GetModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "GetCart"
    });
  }
}

export const methods = {
  get: (filter: any) => {
    return new GetCart(filter);
  }
};
