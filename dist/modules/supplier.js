"use strict";
const AddModule = require("./methods/add");
const GetModule = require("./methods/get");
const UpdateModule = require("./methods/update");
class AddSupplier extends AddModule {
    exec(params = {}) {
        let superParams = {
            action: 'AddSupplier',
            schema: 'Supplier'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
class GetSupplier extends GetModule {
    exec(params = {}) {
        let superParams = {
            action: 'GetSupplier'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
class UpdateSupplier extends UpdateModule {
    exec(params = {}) {
        let superParams = {
            action: 'UpdateSupplier',
            schema: 'Supplier'
        };
        return super.exec(Object.assign(superParams, params));
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
