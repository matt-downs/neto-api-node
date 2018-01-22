"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GetModule = require("./methods/get");
class GetCart extends GetModule {
    exec(params = {}) {
        let superParams = {
            action: 'GetCart'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.GetCart = GetCart;
exports.methods = {
    get: (filter) => {
        return new GetCart(filter);
    }
};
