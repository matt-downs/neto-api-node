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
        return sharedModule.postApi({ action: 'GetCategory', body: this.body });
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