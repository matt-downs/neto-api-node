const Joi = require('Joi');


describe('shipping', function() {

    it('should contain a .getMethods() function', function() {
        Joi.assert(this.api.shipping.getMethods, Joi.func().required());
    });

    it('should contain a .getQuote() function', function() {
        Joi.assert(this.api.shipping.getQuote, Joi.func().required());
    });

});