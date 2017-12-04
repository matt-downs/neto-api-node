const Joi = require('Joi');


describe('cart', function() {

    it('should contain a .get() function', function() {
        Joi.assert(this.api.cart.get, Joi.func().required());
    });

});