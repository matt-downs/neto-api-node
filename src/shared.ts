import request = require('request');

export interface InitOptions {
    url: string;
    key: string;
    user ? : string;
}

let requestOptions: (request.UriOptions & request.CoreOptions) | (request.UrlOptions & request.CoreOptions);


export function init(config: InitOptions) {
    if (!config.url) throw 'URL must be specified'
    if (!config.key) throw 'Key must be specified'

    requestOptions = {
        url: config.url + '/do/WS/NetoAPI',
        strictSSL: true,
        json: true,
        headers: {
            Accept: 'application/json',
            NETOAPI_KEY: config.key
        }
    };

    if (config.user) requestOptions.headers!.NETOAPI_USERNAME = config.user;
}


export function postApi({ action, body }: { action: string, body: any }): Promise < any > {
    let options = Object.assign({}, requestOptions);
    options.headers!.NETOAPI_ACTION = action;
    options.body = body;

    return new Promise((resolve, reject) => {
        request.post(options, (error, response, body) => {
            // Catch any errors 
            if (body.Ack != 'Success') return reject(body.Messages);

            resolve(body);
        });
    });
}