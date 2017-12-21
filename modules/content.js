const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddContent extends AddModule {
    exec({ debug = false } = {}) {
        let body = { Content: this.data };
        let req = { action: 'AddContent', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


class GetContent extends GetModule {
    exec(params = {}) {
        params.action = 'GetContent';
        return super.exec(params);
    }
}


class UpdateContent extends UpdateModule {
    exec({ debug = false } = {}) {
        let body = { Content: this.data };
        let req = { action: 'UpdateContent', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
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