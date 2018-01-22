"use strict";
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');
class AddContent extends AddModule {
    exec(params = {}) {
        params.action = 'AddContent';
        params.schema = 'Content';
        return super.exec(params);
    }
}
class GetContent extends GetModule {
    exec(params = {}) {
        params.action = 'GetContent';
        return super.exec(params);
    }
}
class UpdateContent extends UpdateModule {
    exec(params = {}) {
        params.action = 'UpdateContent';
        params.schema = 'Content';
        return super.exec(params);
    }
}
module.exports = {
    add: (data) => {
        return new AddContent(data);
    },
    get: (filter) => {
        return new GetContent(filter);
    },
    update: (data) => {
        return new UpdateContent(data);
    }
};
