const Joi = require('Joi');


describe('supplier', function() {

    it('should contain a .add() function', function() {
        Joi.assert(this.api.supplier.add, Joi.func().required());
    });

    it('should contain a .get() function', function() {
        Joi.assert(this.api.supplier.get, Joi.func().required());
    });

    it('should contain a .update() function', function() {
        Joi.assert(this.api.supplier.update, Joi.func().required());
    });

});