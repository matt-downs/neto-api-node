import sharedModule = require('../../shared');


export = class GetModule {
    private body: any;

    constructor(filter: any) {
        this.body = {
            Filter: {}
        };
        return this.get(filter);
    }

    public get(filter: any) {
        this.body.Filter = filter;
        return this;
    }

    public output(output: string[]) {
        this.body.Filter.OutputSelector = output;
        return this;
    }

    public exec({ debug = false, action }: { debug ? : boolean, action: string }) {
        let req = { action: action, body: this.body };

        if (debug) return new Promise(resolve => resolve(req));
        return sharedModule.postApi(req);
    }
}