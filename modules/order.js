const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddOrder extends AddModule {
    exec() {
        let body = {
            Order: this.data
        };
        return sharedModule.postApi({ action: 'AddOrder', body: body });
    }
}


class GetOrder extends GetModule {
    exec(params = {}) {
        params.action = 'GetOrder';
        return super.exec(params);
    }
}


class UpdateOrder extends UpdateModule {
    exec() {
        let body = {
            Order: this.data
        };
        return sharedModule.postApi({ action: 'UpdateOrder', body: body });
    }
}


module.exports = {
    add: (data) => {
        return new AddOrder(data);
    },
    get: (filter) => {
        return new GetOrder(filter);
    },
    update: (data) => {
        return new UpdateOrder(data);
    }
};