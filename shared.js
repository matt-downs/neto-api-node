const request = require('request');
let requestOptions;


module.exports = {
    init: (config) => {
        if (!config.url) throw 'URL must be specified'
        if (!config.user) throw 'User must be specified'
        if (!config.key) throw 'Key must be specified'

        requestOptions = {
            url: config.url + '/do/WS/NetoAPI',
            strictSSL: true,
            json: true,
            headers: {
                Accept: 'application/json',
                NETOAPI_USERNAME: config.user,
                NETOAPI_KEY: config.key
            }
        };
    },
    postApi: ({ action, body }) => {
        let options = Object.assign({}, requestOptions);
        options.headers.NETOAPI_ACTION = action;
        options.body = body;

        return new Promise((resolve, reject) => {
            request.post(options, (error, response, body) => {
                // Catch any errors 
                if (body.Ack != 'Success') return reject(body.Messages);

                resolve(body);
            });
        });
    }
};