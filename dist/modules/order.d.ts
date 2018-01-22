import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
import UpdateModule = require('./methods/update');
import { ExecOptions } from '../shared';
export declare class AddOrder extends AddModule {
    exec(params?: ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare class GetOrder extends GetModule {
    exec(params?: ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare class UpdateOrder extends UpdateModule {
    exec(params?: ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare const methods: {
    add: (data: any) => AddOrder;
    get: (filter: any) => GetOrder;
    update: (data: any) => UpdateOrder;
};
