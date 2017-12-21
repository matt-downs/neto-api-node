const sharedModule = require('../shared');
const AddModule = require('./methods/add');
const GetModule = require('./methods/get');
const UpdateModule = require('./methods/update');


class AddCategory extends AddModule {
    exec({ debug = false } = {}) {
        let body = {
            Category: this.data
        };

        let req = { action: 'AddCategory', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
    }
}


class GetCategory extends GetModule {
    exec(params = {}) {
        params.action = 'GetCategory';
        return super.exec(params);
    }
}


class UpdateCategory extends UpdateModule {
    exec({ debug = false } = {}) {
        let body = {
            Category: this.data
        };
        
        let req = { action: 'UpdateCategory', body: body };

        if (debug) return req;
        return sharedModule.postApi(req);
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