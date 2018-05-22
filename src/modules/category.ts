import AddModule = require("./methods/add");
import GetModule = require("./methods/get");
import UpdateModule = require("./methods/update");
import { ExecOptions } from "../shared";

export class AddCategory extends AddModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "AddCategory",
      schema: "Category"
    });
  }
}

export class GetCategory extends GetModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "GetCategory"
    });
  }
}

export class UpdateCategory extends UpdateModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "UpdateCategory",
      schema: "Category"
    });
  }
}

export const methods = {
  add: (data: any) => {
    return new AddCategory(data);
  },
  get: (filter: any) => {
    return new GetCategory(filter);
  },
  update: (data: any) => {
    return new UpdateCategory(data);
  }
};
