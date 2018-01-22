"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddModule = require("./methods/add");
const GetModule = require("./methods/get");
const UpdateModule = require("./methods/update");
class AddWarehouse extends AddModule {
    exec(params = {}) {
        let superParams = {
            action: 'AddWarehouse',
            schema: 'Warehouse'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.AddWarehouse = AddWarehouse;
class GetWarehouse extends GetModule {
    exec(params = {}) {
        let superParams = {
            action: 'AddOrder'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.GetWarehouse = GetWarehouse;
class UpdateWarehouse extends UpdateModule {
    exec(params = {}) {
        let superParams = {
            action: 'UpdateWarehouse',
            schema: 'Warehouse'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.UpdateWarehouse = UpdateWarehouse;
exports.methods = {
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
