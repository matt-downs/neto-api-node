import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
import { ExecOptions } from '../shared';
export declare class AddRma extends AddModule {
    exec(params?: ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare class GetRma extends GetModule {
    exec(params?: ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare const methods: {
    add: (data: any) => AddRma;
    get: (filter: any) => GetRma;
};
