import request = require("request");

export interface ExecOptions {
    debug?: boolean;
}

export interface InitOptions {
    url: string;
    key: string;
    user?: string;
}

let requestOptions: (request.UriOptions & request.CoreOptions) | (request.UrlOptions & request.CoreOptions);

export function init(config: InitOptions) {
    if (!config.url) { throw new Error("url must be specified"); }
    if (!config.key) { throw new Error("key must be specified"); }

    requestOptions = {
        headers: {
            Accept: "application/json",
            NETOAPI_KEY: config.key,
        },
        json: true,
        strictSSL: true,
        url: config.url + "/do/WS/NetoAPI",
    };

    if (config.user) { requestOptions.headers!.NETOAPI_USERNAME = config.user; }
}

export function postApi({ action, body }: { action: string, body: any }): Promise < any > {
    let options = Object.assign({}, requestOptions);
    options.headers!.NETOAPI_ACTION = action;
    options.body = body;

    return new Promise((resolve, reject) => {
        request.post(options, (error, response, responseBody) => {
            // Catch any errors
            if (error) { return reject(error); }
            if (responseBody.Ack !== "Success") { return reject(responseBody.Messages); }

            resolve(responseBody);
        });
    });
}
