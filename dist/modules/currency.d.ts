import sharedModule = require('../shared');
export declare class GetCurrencySettings {
    constructor();
    exec({debug}?: sharedModule.ExecOptions): Promise<any> | {
        action: string;
        body: {};
    };
}
export declare class UpdateCurrencySettings {
    private data;
    constructor(data: any);
    updateSettings(data: any): this;
    exec({debug}?: sharedModule.ExecOptions): Promise<any> | {
        action: string;
        body: {
            CurrencySettings: any;
        };
    };
}
export declare const methods: {
    getSettings: () => GetCurrencySettings;
    updateSettings: (data: any) => UpdateCurrencySettings;
};
