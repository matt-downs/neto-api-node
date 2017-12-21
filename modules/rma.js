const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddRma extends AddModule {
    exec({ debug = false } = {}) {
        let body = {
            Rma: this.data
        };
        
        let req = { action: 'AddRma', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


class GetRma extends GetModule {
    exec(params = {}) {
        params.action = 'GetRma';
        return super.exec(params);
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