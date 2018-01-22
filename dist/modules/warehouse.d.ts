import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
import UpdateModule = require('./methods/update');
import { ExecOptions } from '../shared';
export declare class AddWarehouse extends AddModule {
    exec(params?: ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare class GetWarehouse extends GetModule {
    exec(params?: ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare class UpdateWarehouse extends UpdateModule {
    exec(params?: ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare const methods: {
    add: (data: any) => AddWarehouse;
    get: (filter: any) => GetWarehouse;
    update: (data: any) => UpdateWarehouse;
};
