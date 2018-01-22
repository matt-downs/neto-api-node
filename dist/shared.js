"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
let requestOptions;
function init(config) {
    if (!config.url)
        throw 'URL must be specified';
    if (!config.key)
        throw 'Key must be specified';
    requestOptions = {
        url: config.url + '/do/WS/NetoAPI',
        strictSSL: true,
        json: true,
        headers: {
            Accept: 'application/json',
            NETOAPI_KEY: config.key
        }
    };
    if (config.user)
        requestOptions.headers.NETOAPI_USERNAME = config.user;
}
exports.init = init;
function postApi({ action, body }) {
    let options = Object.assign({}, requestOptions);
    options.headers.NETOAPI_ACTION = action;
    options.body = body;
    return new Promise((resolve, reject) => {
        request.post(options, (error, response, body) => {
            // Catch any errors 
            if (body.Ack != 'Success')
                return reject(body.Messages);
            resolve(body);
        });
    });
}
exports.postApi = postApi;
