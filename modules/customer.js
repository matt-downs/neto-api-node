const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddCustomer extends AddModule {
    exec() {
        let body = {
            Customer: this.data
        };
        return sharedModule.postApi({ action: 'AddCustomer', reqBody: body });
    }
}


class GetCustomer extends GetModule {
    exec() {
        // TODO
        // - Add chaining support
        // - Pull body out as a class property and have the filter and output functions update the body property 
        let body = {
            Filter: this.filterVal
        };
        body.Filter.OutputSelector = this.outputVal;

        return sharedModule.postApi({ action: 'GetCustomer', reqBody: body });
    }
}


class UpdateCustomer extends UpdateModule {
    exec() {
        let body = {
            Customer: this.data
        };
        return sharedModule.postApi({ action: 'UpdateCustomer', reqBody: body });
    }
}


module.exports = {
    add: (data) => {
        return new AddCustomer(data);
    },
    get: (filter) => {
        return new GetCustomer(filter);
    },
    update: (data) => {
        return new UpdateCustomer(data);
    }
};