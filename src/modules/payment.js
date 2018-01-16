const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');


class AddPayment extends AddModule {
    exec({ debug = false } = {}) {
        let body = { Payment: this.data };
        let req = { action: 'AddPayment', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


class GetPayment extends GetModule {
    exec(params = {}) {
        params.action = 'GetPayment';
        return super.exec(params);
    }
}


class GetPaymentMethods {
    constructor() {
        return this;
    }

    exec({ debug = false } = {}) {
        let req = { action: 'GetPaymentMethods', body: {} };

        if (debug) return req;
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