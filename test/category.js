const Joi = require('Joi');


describe('category', function() {

    it('should contain a .add() function', function() {
        Joi.assert(this.api.category.add, Joi.func().required());
    });

    it('should contain a .get() function', function() {
        Joi.assert(this.api.category.get, Joi.func().required());
    });

    it('should contain a .update() function', function() {
        Joi.assert(this.api.category.update, Joi.func().required());
    });

});