const sharedModule = require('../shared');
const addModule = require('./methods/add');
const getModule = require('./methods/get');
const updateModule = require('./methods/update');


module.exports = {
    add: addModule.item,
    get: getModule.item,
    update: updateModule.item
};