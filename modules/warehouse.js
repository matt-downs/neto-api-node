const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddWarehouse extends AddModule {
    exec() {
        let body = {
            Warehouse: this.data
        };
        return sharedModule.postApi({ action: 'AddWarehouse', body: body });
    }
}


class GetWarehouse extends GetModule {
    exec() {
        // TODO
        // - Add chaining support
        // - Pull body out as a class property and have the filter and output functions update the body property 
        let body = {
            Filter: this.filterVal
        };
        body.Filter.OutputSelector = this.outputVal;

        return sharedModule.postApi({ action: 'GetWarehouse', body: body });
    }
}


class UpdateWarehouse extends UpdateModule {
    exec() {
        let body = {
            Warehouse: this.data
        };
        return sharedModule.postApi({ action: 'UpdateWarehouse', body: body });
    }
}


module.exports = {
    add: (data) => {
        return new AddWarehouse(data);
    },
    get: (filter) => {
        return new GetWarehouse(filter);
    },
    update: (data) => {
        return new UpdateWarehouse(data);
    }
};