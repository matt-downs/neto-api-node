const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');


class AddPayment extends AddModule {
    exec({ debug = false } = {}) {
        let body = {
            Payment: this.data
        };
        return sharedModule.postApi({ action: 'AddPayment', body: body });
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
        return sharedModule.postApi({ action: 'GetPaymentMethods', body: {} });
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