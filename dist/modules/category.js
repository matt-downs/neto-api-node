"use strict";
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
class GetCategory extends GetModule {
    exec(params = {}) {
        let superParams = {
            action: 'GetCategory'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
class UpdateCategory extends UpdateModule {
    exec(params = {}) {
        let superParams = {
            action: 'UpdateCategory',
            schema: 'Category'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
module.exports = {
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