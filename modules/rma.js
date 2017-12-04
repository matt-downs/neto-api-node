const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddRma extends AddModule {
    exec() {
        let body = {
            Rma: this.data
        };
        return sharedModule.postApi({ action: 'AddRma', reqBody: body });
    }
}


class GetRma extends GetModule {
    exec() {
        // TODO
        // - Add chaining support
        // - Pull body out as a class property and have the filter and output functions update the body property 
        let body = {
            Filter: this.filterVal
        };
        body.Filter.OutputSelector = this.outputVal;

        return sharedModule.postApi({ action: 'GetRma', reqBody: body });
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