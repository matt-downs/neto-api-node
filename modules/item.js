const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddItem extends AddModule {
    exec() {
        let body = {
            Item: this.data
        };
        return sharedModule.postApi({ action: 'AddItem', body: body });
    }
}


class GetItem extends GetModule {
    exec() {
        // TODO
        // - Add chaining support
        // - Pull body out as a class property and have the filter and output functions update the body property 
        let body = {
            Filter: this.filterVal
        };
        body.Filter.OutputSelector = this.outputVal;

        return sharedModule.postApi({ action: 'GetItem', body: body });
    }
}


class UpdateItem extends UpdateModule {
    exec() {
        let body = {
            Item: this.data
        };
        return sharedModule.postApi({ action: 'UpdateItem', body: body });
    }
}


module.exports = {
    add: (data) => {
        return new AddItem(data);
    },
    get: (filter) => {
        return new GetItem(filter);
    },
    update: (data) => {
        return new UpdateItem(data);
    }
};