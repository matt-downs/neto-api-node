"use strict";
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');
class AddItem extends AddModule {
    exec(params = {}) {
        params.action = 'AddItem';
        params.schema = 'Item';
        return super.exec(params);
    }
}
class GetItem extends GetModule {
    exec(params = {}) {
        params.action = 'GetItem';
        return super.exec(params);
    }
}
class UpdateItem extends UpdateModule {
    exec(params = {}) {
        params.action = 'UpdateItem';
        params.schema = 'Item';
        return super.exec(params);
    }
}
module.exports = {
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
