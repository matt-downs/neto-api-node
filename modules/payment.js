const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');


class AddPayment extends AddModule {
    exec() {
        let body = {
            Payment: this.data
        };
        return sharedModule.postApi({ action: 'AddPayment', reqBody: body });
    }
}


class GetPayment extends GetModule {
    exec() {
        // TODO
        // - Add chaining support
        // - Pull body out as a class property and have the filter and output functions update the body property 
        let body = {
            Filter: this.filterVal
        };
        body.Filter.OutputSelector = this.outputVal;

        return sharedModule.postApi({ action: 'GetPayment', reqBody: body });
    }
}


class GetPaymentMethods {
    constructor() {
        return this;
    }

    exec() {
        return sharedModule.postApi({ action: 'GetPaymentMethods', reqBody: {} });
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