declare const _default: {
    new (data: any): {
        data: any;
        add(data: any): any;
        exec({debug, action, schema}: {
            debug?: boolean | undefined;
            action: string;
            schema: string;
        }): Promise<any> | {
            action: string;
            body: any;
        };
    };
};
export = _default;
