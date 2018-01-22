import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
import UpdateModule = require('./methods/update');
import { ExecOptions } from '../shared';


class AddSupplier extends AddModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'AddSupplier',
            schema: 'Supplier'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


class GetSupplier extends GetModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'GetSupplier'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


class UpdateSupplier extends UpdateModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'UpdateSupplier',
            schema: 'Supplier'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export = {
    add: (data: any) => {
        return new AddSupplier(data);
    },
    get: (filter: any) => {
        return new GetSupplier(filter);
    },
    update: (data: any) => {
        return new UpdateSupplier(data);
    }
};