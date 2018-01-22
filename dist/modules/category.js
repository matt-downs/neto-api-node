"use strict";
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');
class AddCategory extends AddModule {
    exec(params = {}) {
        params.action = 'AddCategory';
        params.schema = 'Category';
        return super.exec(params);
    }
}
class GetCategory extends GetModule {
    exec(params = {}) {
        params.action = 'GetCategory';
        return super.exec(params);
    }
}
class UpdateCategory extends UpdateModule {
    exec(params = {}) {
        params.action = 'UpdateCategory';
        params.schema = 'Category';
        return super.exec(params);
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
