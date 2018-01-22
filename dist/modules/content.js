"use strict";
const AddModule = require("./methods/add");
const GetModule = require("./methods/get");
const UpdateModule = require("./methods/update");
class AddContent extends AddModule {
    exec(params = {}) {
        let superParams = {
            action: 'AddContent',
            schema: 'Content'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
class GetContent extends GetModule {
    exec(params = {}) {
        let superParams = {
            action: 'GetContent'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
class UpdateContent extends UpdateModule {
    exec(params = {}) {
        let superParams = {
            action: 'UpdateContent',
            schema: 'Content'
        };
        return super.exec(Object.assign(superParams, params));
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
