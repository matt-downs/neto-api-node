const sharedModule = require('../shared');


class GetShippingQuote {
    constructor(data) {
        return this.getQuote(data);
    }

    getQuote(data) {
        this.data = data;
    }

    exec({ debug = false } = {}) {
        let body = {
            ShippingQuote: this.data
        };

        let req = { action: 'GetShippingQuote', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


class GetShippingMethods {
    constructor() {
        return this;
    }

    exec({ debug = false } = {}) {
        let req = { action: 'GetShippingMethods', body: {} };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


module.exports = {
    getMethods: () => {
        return new GetShippingMethods();
    },
    getQuote: (data) => {
        return new GetShippingQuote(data);
    }
};