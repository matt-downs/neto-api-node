import sharedModule = require('../../shared');


export = class UpdateModule {
    data: any;

    constructor(data: any) {
        this.data = [];
        return this.update(data);
    }

    update(data: any) {
        if (Array.isArray(data)) {
            for (let element of data) {
                this.data.push(element);
            }
        } else this.data.push(data);

        return this;
    }

    exec({ debug = false, action, schema }: { debug ? : boolean, action: string, schema: string }) {
        let body: any = {};
        body[schema] = this.data;
        let req = { action: action, body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}