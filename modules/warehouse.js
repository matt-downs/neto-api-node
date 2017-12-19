const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddWarehouse extends AddModule {
    exec({ debug = false } = {}) {
        let body = {
            Warehouse: this.data
        };
        return sharedModule.postApi({ action: 'AddWarehouse', body: body });
    }
}


class GetWarehouse extends GetModule {
    exec(params = {}) {
        params.action = 'GetWarehouse';
        return super.exec(params);
    }
}


class UpdateWarehouse extends UpdateModule {
    exec({ debug = false } = {}) {
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