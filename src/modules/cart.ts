import GetModule = require('./methods/get');
import { ExecOptions } from '../shared';


export class GetCart extends GetModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'GetCart'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export const methods = {
    get: (filter: any) => {
        return new GetCart(filter);
    }
};