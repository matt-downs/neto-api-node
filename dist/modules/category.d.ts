import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
import UpdateModule = require('./methods/update');
import { ExecOptions } from '../shared';
export declare class AddCategory extends AddModule {
    exec(params?: ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare class GetCategory extends GetModule {
    exec(params?: ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare class UpdateCategory extends UpdateModule {
    exec(params?: ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare const methods: {
    add: (data: any) => AddCategory;
    get: (filter: any) => GetCategory;
    update: (data: any) => UpdateCategory;
};
