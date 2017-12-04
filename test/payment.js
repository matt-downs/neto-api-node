const Joi = require('Joi');


describe('payment', function() {

    it('should contain a .add() function', function() {
        Joi.assert(this.api.payment.add, Joi.func().required());
    });

    it('should contain a .get() function', function() {
        Joi.assert(this.api.payment.get, Joi.func().required());
    });

    it('should contain a .getMethods() function', function() {
        Joi.assert(this.api.payment.getMethods, Joi.func().required());
    });

});