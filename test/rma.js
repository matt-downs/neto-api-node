const Joi = require('Joi');


describe('rma', function() {

    it('should contain a .add() function', function() {
        Joi.assert(this.api.rma.add, Joi.func().required());
    });

    it('should contain a .get() function', function() {
        Joi.assert(this.api.rma.get, Joi.func().required());
    });

});