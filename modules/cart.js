const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class GetCart extends GetModule {
    exec(params = {}) {
        params.action = 'GetCart';
        return super.exec(params);
    }
}


module.exports = {
    get: (filter) => {
        return new GetCart(filter);
    }
};