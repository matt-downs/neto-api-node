import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
import UpdateModule = require('./methods/update');
import { ExecOptions } from '../shared';


class AddCategory extends AddModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'AddCategory',
            schema: 'Category'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


class GetCategory extends GetModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'GetCategory'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


class UpdateCategory extends UpdateModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'UpdateCategory',
            schema: 'Category'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export = {
    add: (data: any) => {
        return new AddCategory(data);
    },
    get: (filter: any) => {
        return new GetCategory(filter);
    },
    update: (data: any) => {
        return new UpdateCategory(data);
    }
};