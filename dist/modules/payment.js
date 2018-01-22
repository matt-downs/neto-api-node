"use strict";
const sharedModule = require("../shared");
const AddModule = require("./methods/add");
const GetModule = require("./methods/get");
class AddPayment extends AddModule {
    exec(params = {}) {
        let superParams = {
            action: 'AddPayment',
            schema: 'Payment'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
class GetPayment extends GetModule {
    exec(params = {}) {
        let superParams = {
            action: 'GetPayment'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
class GetPaymentMethods {
    constructor() {
        return this;
    }
    exec({ debug = false } = {}) {
        let req = { action: 'GetPaymentMethods', body: {} };
        if (debug)
            return req;
        return sharedModule.postApi(req);
    }
}
module.exports = {
    getMethods: () => {
        return new GetPaymentMethods();
    },
    get: (filter) => {
        return new GetPayment(filter);
    },
    add: (data) => {
        return new AddPayment(data);
    }
};
