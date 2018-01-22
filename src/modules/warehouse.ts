import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
import UpdateModule = require('./methods/update');
import { ExecOptions } from '../shared';


export class AddWarehouse extends AddModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'AddWarehouse',
            schema: 'Warehouse'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export class GetWarehouse extends GetModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'AddOrder'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export class UpdateWarehouse extends UpdateModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'UpdateWarehouse',
            schema: 'Warehouse'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export const methods = {
    add: (data: any) => {
        return new AddWarehouse(data);
    },
    get: (filter: any) => {
        return new GetWarehouse(filter);
    },
    update: (data: any) => {
        return new UpdateWarehouse(data);
    }
};