"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddModule = require("./methods/add");
const GetModule = require("./methods/get");
const UpdateModule = require("./methods/update");
class AddItem extends AddModule {
    exec(params = {}) {
        let superParams = {
            action: 'AddItem',
            schema: 'Item'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.AddItem = AddItem;
class GetItem extends GetModule {
    exec(params = {}) {
        let superParams = {
            action: 'GetItem'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.GetItem = GetItem;
class UpdateItem extends UpdateModule {
    exec(params = {}) {
        let superParams = {
            action: 'UpdateItem',
            schema: 'Item'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.UpdateItem = UpdateItem;
exports.methods = {
    add: (data) => {
        return new AddItem(data);
    },
    get: (filter) => {
        return new GetItem(filter);
    },
    update: (data) => {
        return new UpdateItem(data);
    }
};
