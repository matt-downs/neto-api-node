import sharedModule = require("../shared");

export class GetCurrencySettings {
  constructor() {
    return this;
  }

  public exec({ debug = false }: sharedModule.ExecOptions = {}) {
    let req = { action: "GetCurrencySettings", body: {} };

    if (debug) return req;
    return sharedModule.postApi(req);
  }
}

export class UpdateCurrencySettings {
  private data: any;

  constructor(data: any) {
    return this.updateSettings(data);
  }

  public updateSettings(data: any) {
    this.data = data;
    return this;
  }

  public exec({ debug = false }: sharedModule.ExecOptions = {}) {
    let body = { CurrencySettings: this.data };
    let req = { action: "UpdateCurrencySettings", body: body };

    if (debug) return req;
    return sharedModule.postApi(req);
  }
}

export const methods = {
  getSettings: () => {
    return new GetCurrencySettings();
  },
  updateSettings: (data: any) => {
    return new UpdateCurrencySettings(data);
  }
};
