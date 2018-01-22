"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddModule = require("./methods/add");
const GetModule = require("./methods/get");
const UpdateModule = require("./methods/update");
class AddOrder extends AddModule {
    exec(params = {}) {
        let superParams = {
            action: 'AddOrder',
            schema: 'Order'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.AddOrder = AddOrder;
class GetOrder extends GetModule {
    exec(params = {}) {
        let superParams = {
            action: 'GetOrder'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.GetOrder = GetOrder;
class UpdateOrder extends UpdateModule {
    exec(params = {}) {
        let superParams = {
            action: 'UpdateOrder',
            schema: 'Order'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.UpdateOrder = UpdateOrder;
exports.methods = {
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
