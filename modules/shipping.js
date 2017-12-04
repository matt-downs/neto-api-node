const sharedModule = require('../shared');


class GetQuote {
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


class GetMethods {
    constructor() {
        return this;
    }

    exec() {
        return sharedModule.postApi({ action: 'GetShippingMethods', reqBody: {} });
    }
}


module.exports = {
    getMethods: () => {
        return new GetMethods();
    },
    getQuote: (data) => {
        return new GetQuote(data);
    }
};