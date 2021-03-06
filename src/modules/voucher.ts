import { ExecOptions } from "../shared";
import AddModule from "./methods/add";
import GetModule from "./methods/get";
import UpdateModule from "./methods/update";

export class AddVoucher extends AddModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "AddVoucher",
      schema: "Voucher"
    });
  }
}

export class GetVoucher extends GetModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "GetVoucher"
    });
  }
}

export class UpdateVoucher extends UpdateModule {
  public exec(params: ExecOptions = {}) {
    return super.exec({
      ...params,
      action: "UpdateVoucher",
      schema: "Voucher"
    });
  }
}

export const methods = {
  add: (data: any) => {
    return new AddVoucher(data);
  },
  get: (filter: any) => {
    return new GetVoucher(filter);
  },
  update: (data: any) => {
    return new UpdateVoucher(data);
  }
};
