import sharedModule = require('../shared');
import AddModule = require('./methods/add');
import GetModule = require('./methods/get');
export declare class AddPayment extends AddModule {
    exec(params?: sharedModule.ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare class GetPayment extends GetModule {
    exec(params?: sharedModule.ExecOptions): Promise<any> | {
        action: string;
        body: any;
    };
}
export declare class GetPaymentMethods {
    constructor();
    exec({debug}?: sharedModule.ExecOptions): Promise<any> | {
        action: string;
        body: {};
    };
}
export declare const methods: {
    getMethods: () => GetPaymentMethods;
    get: (filter: any) => GetPayment;
    add: (data: any) => AddPayment;
};
