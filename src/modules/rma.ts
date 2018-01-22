import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
import UpdateModule = require('./methods/update');
import { ExecOptions } from '../shared';


export class AddRma extends AddModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'AddRma',
            schema: 'Rma'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export class GetRma extends GetModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'GetRma'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export const methods = {
    add: (data: any) => {
        return new AddRma(data);
    },
    get: (filter: any) => {
        return new GetRma(filter);
    }
};