const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddItem extends AddModule {
    exec({ debug = false } = {}) {
        let body = { Item: this.data };
        let req = { action: 'AddItem', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


class GetItem extends GetModule {
    exec(params = {}) {
        params.action = 'GetItem';
        return super.exec(params);
    }
}


class UpdateItem extends UpdateModule {
    exec({ debug = false } = {}) {
        let body = { Item: this.data };
        let req = { action: 'UpdateItem', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
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