const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddCategory extends AddModule {
    exec() {
        let body = {
            Category: this.data
        };
        return sharedModule.postApi({ action: 'AddCategory', body: body });
    }
}


class GetCategory extends GetModule {
    exec() {
        // TODO
        // - Add chaining support
        // - Pull body out as a class property and have the filter and output functions update the body property 
        let body = {
            Filter: this.filterVal
        };
        body.Filter.OutputSelector = this.outputVal;

        return sharedModule.postApi({ action: 'GetCategory', body: body });
    }
}


class UpdateCategory extends UpdateModule {
    exec() {
        let body = {
            Category: this.data
        };
        return sharedModule.postApi({ action: 'UpdateCategory', body: body });
    }
}


module.exports = {
    add: (data) => {
        return new AddCategory(data);
    },
    get: (filter) => {
        return new GetCategory(filter);
    },
    update: (data) => {
        return new UpdateCategory(data);
    }
};