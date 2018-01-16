const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddVoucher extends AddModule {
    exec({ debug = false } = {}) {
        let body = { Voucher: this.data };
        let req = { action: 'AddVoucher', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


class GetVoucher extends GetModule {
    exec(params = {}) {
        params.action = 'GetVoucher';
        return super.exec(params);
    }
}


class UpdateVoucher extends UpdateModule {
    exec({ debug = false } = {}) {
        let body = { Voucher: this.data };
        let req = { action: 'UpdateVoucher', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


module.exports = {
    add: (data) => {
        return new AddVoucher(data);
    },
    get: (filter) => {
        return new GetVoucher(filter);
    },
    update: (data) => {
        return new UpdateVoucher(data);
    }
};