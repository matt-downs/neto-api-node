import { ExecOptions } from "../shared";
import AddModule from "./methods/add";
import GetModule from "./methods/get";
import UpdateModule from "./methods/update";

export class AddItem extends AddModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "AddItem",
      schema: "Item"
    });
  }
}

export class GetItem extends GetModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "GetItem"
    });
  }
}

export class UpdateItem extends UpdateModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "UpdateItem",
      schema: "Item"
    });
  }
}

export const methods = {
  add: (data: any) => {
    return new AddItem(data);
  },
  get: (filter: any) => {
    return new GetItem(filter);
  },
  update: (data: any) => {
    return new UpdateItem(data);
  }
};
