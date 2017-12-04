const Joi = require('Joi');


describe('warehouse', function() {

    it('should contain a .add() function', function() {
        Joi.assert(this.api.warehouse.add, Joi.func().required());
    });

    it('should contain a .get() function', function() {
        Joi.assert(this.api.warehouse.get, Joi.func().required());
    });

    it('should contain a .update() function', function() {
        Joi.assert(this.api.warehouse.update, Joi.func().required());
    });

});