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

        return sharedModule.postApi({ action: 'GetShippingQuote', body: body });
    }
}


class GetShippingMethods {
    constructor() {
        return this;
    }

    exec({ debug = false } = {}) {
        return sharedModule.postApi({ action: 'GetShippingMethods', body: {} });
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