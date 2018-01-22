import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
import UpdateModule = require('./methods/update');
import { ExecOptions } from '../shared';


class AddItem extends AddModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'AddItem',
            schema: 'Item'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


class GetItem extends GetModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'GetItem'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


class UpdateItem extends UpdateModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'UpdateItem',
            schema: 'Item'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export = {
    add: (data: any) => {
        return new AddItem(data);
    },
    get: (filter: any) => {
        return new GetItem(filter);
    },
    update: (data: any) => {
        return new UpdateItem(data);
    }
};