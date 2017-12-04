const Joi = require('Joi');


describe('voucher', function() {

    it('should contain a .add() function', function() {
        Joi.assert(this.api.voucher.add, Joi.func().required());
    });

    it('should contain a .get() function', function() {
        Joi.assert(this.api.voucher.get, Joi.func().required());
    });

    it('should contain a .update() function', function() {
        Joi.assert(this.api.voucher.update, Joi.func().required());
    });

});