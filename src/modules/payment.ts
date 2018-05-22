import { postApi, ExecOptions } from "../shared";
import AddModule from "./methods/add";
import GetModule from "./methods/get";

export class AddPayment extends AddModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "AddPayment",
      schema: "Payment"
    });
  }
}

export class GetPayment extends GetModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "GetPayment"
    });
  }
}

export class GetPaymentMethods {
  constructor() {
    return this;
  }

  public exec({ debug = false }: ExecOptions = {}) {
    let req = { action: "GetPaymentMethods", body: {} };

    if (debug) return req;
    return postApi(req);
  }
}

export const methods = {
  getMethods: () => {
    return new GetPaymentMethods();
  },
  get: (filter: any) => {
    return new GetPayment(filter);
  },
  add: (data: any) => {
    return new AddPayment(data);
  }
};
