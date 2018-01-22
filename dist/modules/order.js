"use strict";
const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');
class AddOrder extends AddModule {
    exec({ debug = false } = {}) {
        let body = { Order: this.data };
        let req = { action: 'AddOrder', body: body };
        if (debug)
            return req;
        return sharedModule.postApi(req);
    }
}
class GetOrder extends GetModule {
    exec(params = {}) {
        params.action = 'GetOrder';
        return super.exec(params);
    }
}
class UpdateOrder extends UpdateModule {
    exec({ debug = false } = {}) {
        let body = { Order: this.data };
        let req = { action: 'UpdateOrder', body: body };
        if (debug)
            return req;
        return sharedModule.postApi(req);
    }
}
module.exports = {
    add: (data) => {
        return new AddOrder(data);
    },
    get: (filter) => {
        return new GetOrder(filter);
    },
    update: (data) => {
        return new UpdateOrder(data);
    }
};
