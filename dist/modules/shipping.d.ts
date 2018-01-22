import sharedModule = require('../shared');
export declare class GetShippingQuote {
    private data;
    constructor(data: any);
    getQuote(data: any): this;
    exec({debug}?: sharedModule.ExecOptions): Promise<any> | {
        action: string;
        body: {
            ShippingQuote: any;
        };
    };
}
export declare class GetShippingMethods {
    constructor();
    exec({debug}?: sharedModule.ExecOptions): Promise<any> | {
        action: string;
        body: {};
    };
}
export declare const methods: {
    getMethods: () => GetShippingMethods;
    getQuote: (data: any) => GetShippingQuote;
};
