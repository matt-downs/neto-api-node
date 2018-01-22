"use strict";
const AddModule = require("./methods/add");
const GetModule = require("./methods/get");
const UpdateModule = require("./methods/update");
class AddVoucher extends AddModule {
    exec(params = {}) {
        let superParams = {
            action: 'AddVoucher',
            schema: 'Voucher'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
class GetVoucher extends GetModule {
    exec(params = {}) {
        let superParams = {
            action: 'GetVoucher'
        };
        return super.exec(Object.assign(superParams, params));
    }
}
class UpdateVoucher extends UpdateModule {
    exec(params = {}) {
        let superParams = {
            action: 'UpdateVoucher',
            schema: 'Voucher'
        };
        return super.exec(Object.assign(superParams, params));
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
