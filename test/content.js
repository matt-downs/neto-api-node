const Joi = require('Joi');


describe('content', function() {

    it('should contain a .add() function', function() {
        Joi.assert(this.api.content.add, Joi.func().required());
    });

    it('should contain a .get() function', function() {
        Joi.assert(this.api.content.get, Joi.func().required());
    });

    it('should contain a .update() function', function() {
        Joi.assert(this.api.content.update, Joi.func().required());
    });

});