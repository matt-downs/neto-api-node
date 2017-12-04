const sharedModule = require('../shared');


class GetShippingQuote {
    constructor(data) {
        return this.getQuote(data);
    }

    getQuote(data) {
        this.data = data;
    }

    exec() {
        let body = {
            ShippingQuote: this.data
        };

        return sharedModule.postApi({ action: 'GetShippingQuote', reqBody: body });
    }
}


class GetShippingMethods {
    constructor() {
        return this;
    }

    exec() {
        return sharedModule.postApi({ action: 'GetShippingMethods', reqBody: {} });
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