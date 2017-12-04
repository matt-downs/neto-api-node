const Joi = require('Joi');


describe('currency', function() {

    it('should contain a .getSettings() function', function() {
        Joi.assert(this.api.currency.getSettings, Joi.func().required());
    });

    it('should contain a .updateSettings() function', function() {
        Joi.assert(this.api.currency.updateSettings, Joi.func().required());
    });

});