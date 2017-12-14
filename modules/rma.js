const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddRma extends AddModule {
    exec() {
        let body = {
            Rma: this.data
        };
        return sharedModule.postApi({ action: 'AddRma', body: body });
    }
}


class GetRma extends GetModule {
    exec() {
        return sharedModule.postApi({ action: 'GetRma', body: this.body });
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