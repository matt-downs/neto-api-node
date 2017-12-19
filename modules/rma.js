const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddRma extends AddModule {
    exec({ debug = false } = {}) {
        let body = {
            Rma: this.data
        };
        return sharedModule.postApi({ action: 'AddRma', body: body });
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