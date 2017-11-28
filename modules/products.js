const sharedModule = require('../shared');


const getProducts = (filter) => {
    return new Promise((resolve, reject) => {
        let body = {
            Filter: {
                SKU: ['smp_1', 'smp_2'],
                OutputSelector: ['Name']
            }
        };
        sharedModule.postApi({action: 'GetItem', reqBody: body})
        .then(resolve)
        .catch(reject)
    });
};


module.exports = {
    getProducts: getProducts
};