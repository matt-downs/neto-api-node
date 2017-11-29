const sharedModule = require('../shared');
const getModule = require('./methods/get');
const updateModule = require('./methods/update');


module.exports = {
    // add: addItem,
    get: getModule.item,
    update: updateModule.item
};