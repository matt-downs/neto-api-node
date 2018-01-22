import sharedModule = require('../shared');
import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
import UpdateModule = require('./methods/update');
export declare class AddCustomer extends AddModule {
    exec(params?: sharedModule.ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare class GetCustomer extends GetModule {
    exec(params?: sharedModule.ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare class UpdateCustomer extends UpdateModule {
    exec(params?: sharedModule.ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare class AddCustomerLog {
    private addModule;
    constructor(data: any);
    addLog(data: any): this;
    exec({debug}?: sharedModule.ExecOptions): Promise<any> | {
        action: string;
        body: {
            CustomerLogs: {
                CustomerLog: any;
            };
        };
    };
}
export declare class UpdateCustomerLog {
    private updateModule;
    constructor(data: any);
    updateLog(data: any): this;
    exec({debug}?: sharedModule.ExecOptions): Promise<any> | {
        action: string;
        body: {
            CustomerLogs: {
                CustomerLog: any;
            };
        };
    };
}
export declare const methods: {
    add: (data: any) => AddCustomer;
    get: (filter: any) => GetCustomer;
    update: (data: any) => UpdateCustomer;
    addLog: (data: any) => AddCustomerLog;
    updateLog: (data: any) => UpdateCustomerLog;
};
