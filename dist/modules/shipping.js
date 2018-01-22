"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sharedModule = require("../shared");
class GetShippingQuote {
    constructor(data) {
        return this.getQuote(data);
    }
    getQuote(data) {
        this.data = data;
        return this;
    }
    exec({ debug = false } = {}) {
        let body = { ShippingQuote: this.data };
        let req = { action: 'GetShippingQuote', body: body };
        if (debug)
            return req;
        return sharedModule.postApi(req);
    }
}
exports.GetShippingQuote = GetShippingQuote;
class GetShippingMethods {
    constructor() {
        return this;
    }
    exec({ debug = false } = {}) {
        let req = { action: 'GetShippingMethods', body: {} };
        if (debug)
            return req;
        return sharedModule.postApi(req);
    }
}
exports.GetShippingMethods = GetShippingMethods;
exports.methods = {
    getMethods: () => {
        return new GetShippingMethods();
    },
    getQuote: (data) => {
        return new GetShippingQuote(data);
    }
};
