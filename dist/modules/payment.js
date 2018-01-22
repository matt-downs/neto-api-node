"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.AddPayment = AddPayment;
class GetPayment extends GetModule {
    exec(params = {}) {
        let superParams = {
            action: 'GetPayment'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.GetPayment = GetPayment;
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
exports.GetPaymentMethods = GetPaymentMethods;
exports.methods = {
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
