const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddVoucher extends AddModule {
    exec() {
        let body = {
            Voucher: this.data
        };
        return sharedModule.postApi({ action: 'AddVoucher', reqBody: body });
    }
}


class GetVoucher extends GetModule {
    exec() {
        // TODO
        // - Add chaining support
        // - Pull body out as a class property and have the filter and output functions update the body property 
        let body = {
            Filter: this.filterVal
        };
        body.Filter.OutputSelector = this.outputVal;

        return sharedModule.postApi({ action: 'GetVoucher', reqBody: body });
    }
}


class UpdateVoucher extends UpdateModule {
    exec() {
        let body = {
            Voucher: this.data
        };
        return sharedModule.postApi({ action: 'UpdateVoucher', reqBody: body });
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