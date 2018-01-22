import sharedModule = require('../shared');


class GetShippingQuote {
    private data: any;

    constructor(data: any) {
        return this.getQuote(data);
    }

    public getQuote(data: any) {
        this.data = data;
        return this;
    }

    public exec({ debug = false }: sharedModule.ExecOptions = {}) {
        let body = { ShippingQuote: this.data };
        let req = { action: 'GetShippingQuote', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


class GetShippingMethods {
    constructor() {
        return this;
    }

    public exec({ debug = false }: sharedModule.ExecOptions = {}) {
        let req = { action: 'GetShippingMethods', body: {} };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


export = {
    getMethods: () => {
        return new GetShippingMethods();
    },
    getQuote: (data: any) => {
        return new GetShippingQuote(data);
    }
};