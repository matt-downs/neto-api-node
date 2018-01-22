"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddModule = require("./methods/add");
const GetModule = require("./methods/get");
const UpdateModule = require("./methods/update");
class AddCategory extends AddModule {
    exec(params = {}) {
        let superParams = {
            action: 'AddCategory',
            schema: 'Category'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.AddCategory = AddCategory;
class GetCategory extends GetModule {
    exec(params = {}) {
        let superParams = {
            action: 'GetCategory'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.GetCategory = GetCategory;
class UpdateCategory extends UpdateModule {
    exec(params = {}) {
        let superParams = {
            action: 'UpdateCategory',
            schema: 'Category'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
exports.UpdateCategory = UpdateCategory;
exports.methods = {
    add: (data) => {
        return new AddCategory(data);
    },
    get: (filter) => {
        return new GetCategory(filter);
    },
    update: (data) => {
        return new UpdateCategory(data);
    }
};
