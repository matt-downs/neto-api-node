import { postApi } from "../../shared";

export default class AddModule {
  private data: any;

  constructor(data: any) {
    this.data = [];
    return this.add(data);
  }

  public add(data: any) {
    if (Array.isArray(data)) {
      for (let element of data) {
        this.data.push(element);
      }
    } else this.data.push(data);

    return this;
  }

  public exec({
    debug = false,
    action,
    schema
  }: {
    debug?: boolean;
    action: string;
    schema: string;
  }) {
    let body: any = {};
    body[schema] = this.data;
    let req = { action: action, body: body };

    if (debug) return new Promise(resolve => resolve(req));
    return postApi(req);
  }
}
