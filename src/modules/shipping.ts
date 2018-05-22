import { postApi, ExecOptions } from "../shared";

export class GetShippingQuote {
  private data: any;

  constructor(data: any) {
    return this.getQuote(data);
  }

  public getQuote(data: any) {
    this.data = data;
    return this;
  }

  public exec({ debug = false }: ExecOptions = {}) {
    let body = { ShippingQuote: this.data };
    let req = { action: "GetShippingQuote", body: body };

    if (debug) return req;
    return postApi(req);
  }
}

export class GetShippingMethods {
  constructor() {
    return this;
  }

  public exec({ debug = false }: ExecOptions = {}) {
    let req = { action: "GetShippingMethods", body: {} };

    if (debug) return req;
    return postApi(req);
  }
}

export const methods = {
  getMethods: () => {
    return new GetShippingMethods();
  },
  getQuote: (data: any) => {
    return new GetShippingQuote(data);
  }
};
