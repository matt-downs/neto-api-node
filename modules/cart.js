const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class GetCart extends GetModule {
    exec() {
        return sharedModule.postApi({ action: 'GetCart', body: this.body });
    }
}


module.exports = {
    get: (filter) => {
        return new GetCart(filter);
    }
};