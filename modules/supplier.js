const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddSupplier extends AddModule {
    exec({ debug = false } = {}) {
        let body = {
            Supplier: this.data
        };
        return sharedModule.postApi({ action: 'AddSupplier', body: body });
    }
}


class GetSupplier extends GetModule {
    exec(params = {}) {
        params.action = 'GetSupplier';
        return super.exec(params);
    }
}


class UpdateSupplier extends UpdateModule {
    exec({ debug = false } = {}) {
        let body = {
            Supplier: this.data
        };
        return sharedModule.postApi({ action: 'UpdateSupplier', body: body });
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