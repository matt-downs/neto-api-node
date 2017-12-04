const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddOrder extends AddModule {
    exec() {
        let body = {
            Order: this.data
        };
        return sharedModule.postApi({ action: 'AddOrder', body: body });
    }
}


class GetOrder extends GetModule {
    exec() {
        // TODO
        // - Add chaining support
        // - Pull body out as a class property and have the filter and output functions update the body property 
        let body = {
            Filter: this.filterVal
        };
        body.Filter.OutputSelector = this.outputVal;

        return sharedModule.postApi({ action: 'GetOrder', body: body });
    }
}


class UpdateOrder extends UpdateModule {
    exec() {
        let body = {
            Order: this.data
        };
        return sharedModule.postApi({ action: 'UpdateOrder', body: body });
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