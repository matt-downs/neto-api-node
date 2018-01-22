import GetModule = require('./methods/get');
import { ExecOptions } from '../shared';
export declare class GetCart extends GetModule {
    exec(params?: ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare const methods: {
    get: (filter: any) => GetCart;
};
