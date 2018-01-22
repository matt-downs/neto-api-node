import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
import UpdateModule = require('./methods/update');
import { ExecOptions } from '../shared';


export class AddContent extends AddModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'AddContent',
            schema: 'Content'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export class GetContent extends GetModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'GetContent'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export class UpdateContent extends UpdateModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'UpdateContent',
            schema: 'Content'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export const methods = {
    add: (data: any) => {
        return new AddContent(data);
    },
    get: (filter: any) => {
        return new GetContent(filter);
    },
    update: (data: any) => {
        return new UpdateContent(data);
    }
};