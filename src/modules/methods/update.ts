import sharedModule = require('../../shared');


export = class UpdateModule {
    private data: any;

    constructor(data: any) {
        this.data = [];
        return this.update(data);
    }

    public update(data: any) {
        if (Array.isArray(data)) {
            for (let element of data) {
                this.data.push(element);
            }
        } else this.data.push(data);

        return this;
    }

    public exec({ debug = false, action, schema }: { debug ? : boolean, action: string, schema: string }) {
        let body: any = {};
        body[schema] = this.data;
        let req = { action: action, body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}