import sharedModule = require('../../shared');


export = class GetModule {
    body: any;

    constructor(filter: any) {
        this.body = {
            Filter: {}
        };
        return this.get(filter);
    }

    get(filter: any) {
        this.body.Filter = filter;
        return this;
    }

    output(output: string[]) {
        this.body.Filter.OutputSelector = output;
        return this;
    }

    exec({ debug = false, action }: { debug ? : boolean, action: string }) {
        let req = { action: action, body: this.body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}