// This module handles initialisation and stores the configuration of the API details

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
    getRequestOptions: () => { return requestOptions; }
}