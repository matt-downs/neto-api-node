const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddItem extends AddModule {
    exec({ debug }) {
        let body = {
            Item: this.data
        };

        let req = { action: 'AddItem', body: body };
        
        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


class GetItem extends GetModule {
    exec({ debug }) {
        // TODO
        // - Add chaining support
        // - Pull body out as a class property and have the filter and output functions update the body property 
        let body = {
            Filter: this.filterVal
        };
        body.Filter.OutputSelector = this.outputVal;

        let req = { action: 'GetItem', body: body };
        
        if (debug) return req;
        return sharedModule.postApi(req);
    }
}





class UpdateItem extends UpdateModule {
    exec({ debug }) {
        let body = {
            Item: this.data
        };

        let req = { action: 'UpdateItem', body: body };
        
        if (debug) return req;
        return sharedModule.postApi(req);
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