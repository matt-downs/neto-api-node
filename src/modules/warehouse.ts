import { ExecOptions } from "../shared";
import AddModule = require("./methods/add");
import GetModule = require("./methods/get");
import UpdateModule = require("./methods/update");

export class AddWarehouse extends AddModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "AddWarehouse",
      schema: "Warehouse"
    });
  }
}

export class GetWarehouse extends GetModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "GetWarehouse"
    });
  }
}

export class UpdateWarehouse extends UpdateModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "UpdateWarehouse",
      schema: "Warehouse"
    });
  }
}

export const methods = {
  add: (data: any) => {
    return new AddWarehouse(data);
  },
  get: (filter: any) => {
    return new GetWarehouse(filter);
  },
  update: (data: any) => {
    return new UpdateWarehouse(data);
  }
};
