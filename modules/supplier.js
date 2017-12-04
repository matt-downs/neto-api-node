const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddSupplier extends AddModule {
    exec() {
        let body = {
            Supplier: this.data
        };
        return sharedModule.postApi({ action: 'AddSupplier', reqBody: body });
    }
}


class GetSupplier extends GetModule {
    exec() {
        // TODO
        // - Add chaining support
        // - Pull body out as a class property and have the filter and output functions update the body property 
        let body = {
            Filter: this.filterVal
        };
        body.Filter.OutputSelector = this.outputVal;

        return sharedModule.postApi({ action: 'GetSupplier', reqBody: body });
    }
}


class UpdateSupplier extends UpdateModule {
    exec() {
        let body = {
            Supplier: this.data
        };
        return sharedModule.postApi({ action: 'UpdateSupplier', reqBody: body });
    }
}


module.exports = {
    add: (data) => {
        return new AddSupplier(data);
    },
    get: (filter) => {
        return new GetSupplier(filter);
    },
    update: (data) => {
        return new UpdateSupplier(data);
    }
};