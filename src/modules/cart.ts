import GetModule = require('./methods/get');
import { ExecOptions } from '../shared';


class GetCart extends GetModule {
    public exec(params: ExecOptions = {}) {
        let superParams = {
            action: 'GetCart'
        }
        return super.exec(Object.assign(superParams, params));
    }
}


export = {
    get: (filter: any) => {
        return new GetCart(filter);
    }
};