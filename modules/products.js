const request = require('request');
const configModule = require('../config');


const getProducts = () => {
    let options = Object.assign({}, configModule.getRequestOptions());
    options.headers.NETOAPI_ACTION = 'GetItem';
    options.body = {
        Filter: {
            SKU: ['smp_1', 'smp_2'],
            OutputSelector: ['Name']
        }
    };

    return new Promise((resolve, reject) => {
        request.post(options, (error, response, body) => {
            if (body.Ack != 'Success') return reject(body.Messages);
            resolve(body);
        });
    });
};


module.exports = {
    getProducts: getProducts
};