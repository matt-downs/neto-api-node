"use strict";
const GetModule = require("./methods/get");
class GetCart extends GetModule {
    exec(params = {}) {
        let superParams = {
            action: 'GetCart'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
module.exports = {
    get: (filter) => {
        return new GetCart(filter);
    }
};