import { ExecOptions } from "../shared";
import AddModule = require("./methods/add");
import GetModule = require("./methods/get");
import UpdateModule = require("./methods/update");

export class AddSupplier extends AddModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "AddSupplier",
      schema: "Supplier"
    });
  }
}

export class GetSupplier extends GetModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "GetSupplier"
    });
  }
}

export class UpdateSupplier extends UpdateModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "UpdateSupplier",
      schema: "Supplier"
    });
  }
}

export const methods = {
  add: (data: any) => {
    return new AddSupplier(data);
  },
  get: (filter: any) => {
    return new GetSupplier(filter);
  },
  update: (data: any) => {
    return new UpdateSupplier(data);
  }
};
