"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.AddSupplier = AddSupplier;
class GetSupplier extends GetModule {
    exec(params = {}) {
        let superParams = {
            action: 'GetSupplier'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.GetSupplier = GetSupplier;
class UpdateSupplier extends UpdateModule {
    exec(params = {}) {
        let superParams = {
            action: 'UpdateSupplier',
            schema: 'Supplier'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.UpdateSupplier = UpdateSupplier;
exports.methods = {
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
