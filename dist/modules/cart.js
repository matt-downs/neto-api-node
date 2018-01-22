"use strict";
const GetModule = require('./methods/get');
class GetCart extends GetModule {
    exec(params = {}) {
        params.action = 'GetCart';
        return super.exec(params);
    }
}
module.exports = {
    get: (filter) => {
        return new GetCart(filter);
    }
};
