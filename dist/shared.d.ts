export interface ExecOptions {
    debug?: boolean;
}
export interface InitOptions {
    url: string;
    key: string;
    user?: string;
}
export declare function init(config: InitOptions): void;
export declare function postApi({action, body}: {
    action: string;
    body: any;
}): Promise<any>;
