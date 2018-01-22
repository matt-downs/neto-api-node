"use strict";
const AddModule = require("./methods/add");
const GetModule = require("./methods/get");
class AddRma extends AddModule {
    exec(params = {}) {
        let superParams = {
            action: 'AddRma',
            schema: 'Rma'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
class GetRma extends GetModule {
    exec(params = {}) {
        let superParams = {
            action: 'GetRma'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
module.exports = {
    add: (data) => {
        return new AddRma(data);
    },
    get: (filter) => {
        return new GetRma(filter);
    }
};
