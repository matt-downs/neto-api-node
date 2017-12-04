const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddContent extends AddModule {
    exec() {
        let body = {
            Content: this.data
        };
        return sharedModule.postApi({ action: 'AddContent', body: body });
    }
}


class GetContent extends GetModule {
    exec() {
        // TODO
        // - Add chaining support
        // - Pull body out as a class property and have the filter and output functions update the body property 
        let body = {
            Filter: this.filterVal
        };
        body.Filter.OutputSelector = this.outputVal;

        return sharedModule.postApi({ action: 'GetContent', body: body });
    }
}


class UpdateContent extends UpdateModule {
    exec() {
        let body = {
            Content: this.data
        };
        return sharedModule.postApi({ action: 'UpdateContent', body: body });
    }
}


module.exports = {
    add: (data) => {
        return new AddContent(data);
    },
    get: (filter) => {
        return new GetContent(filter);
    },
    update: (data) => {
        return new UpdateContent(data);
    }
};