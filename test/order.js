const Joi = require('Joi');


describe('order', function() {

    it('should contain a .add() function', function() {
        Joi.assert(this.api.order.add, Joi.func().required());
    });

    it('should contain a .get() function', function() {
        Joi.assert(this.api.order.get, Joi.func().required());
    });

    it('should contain a .update() function', function() {
        Joi.assert(this.api.order.update, Joi.func().required());
    });

});