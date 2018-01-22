import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
import UpdateModule = require('./methods/update');
import { ExecOptions } from '../shared';
export declare class AddItem extends AddModule {
    exec(params?: ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare class GetItem extends GetModule {
    exec(params?: ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare class UpdateItem extends UpdateModule {
    exec(params?: ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare const methods: {
    add: (data: any) => AddItem;
    get: (filter: any) => GetItem;
    update: (data: any) => UpdateItem;
};
