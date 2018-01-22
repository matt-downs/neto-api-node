import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
import UpdateModule = require('./methods/update');
import { ExecOptions } from '../shared';


export class AddSupplier extends AddModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'AddSupplier',
            schema: 'Supplier'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export class GetSupplier extends GetModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'GetSupplier'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export class UpdateSupplier extends UpdateModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'UpdateSupplier',
            schema: 'Supplier'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export const methods = {
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