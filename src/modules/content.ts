import AddModule from "./methods/add";
import GetModule from "./methods/get";
import UpdateModule from "./methods/update";
import { ExecOptions } from "../shared";

export class AddContent extends AddModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "AddContent",
      schema: "Content"
    });
  }
}

export class GetContent extends GetModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "GetContent"
    });
  }
}

export class UpdateContent extends UpdateModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "UpdateContent",
      schema: "Content"
    });
  }
}

export const methods = {
  add: (data: any) => {
    return new AddContent(data);
  },
  get: (filter: any) => {
    return new GetContent(filter);
  },
  update: (data: any) => {
    return new UpdateContent(data);
  }
};
