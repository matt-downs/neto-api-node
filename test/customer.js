const Joi = require('Joi');


describe('customer', function() {

    it('should contain a .add() function', function() {
        Joi.assert(this.api.customer.add, Joi.func().required());
    });

    it('should contain a .get() function', function() {
        Joi.assert(this.api.customer.get, Joi.func().required());
    });

    it('should contain a .update() function', function() {
        Joi.assert(this.api.customer.update, Joi.func().required());
    });

});