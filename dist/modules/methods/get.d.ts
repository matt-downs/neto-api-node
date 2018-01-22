declare const _default: {
    new (filter: any): {
        body: any;
        get(filter: any): any;
        output(output: string[]): any;
        exec({debug, action}: {
            debug?: boolean | undefined;
            action: string;
        }): Promise<any> | {
            action: string;
            body: any;
        };
    };
};
export = _default;
