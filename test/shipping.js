const Joi = require('Joi');


describe('shipping', function() {

    describe('.getQuote()', function() {

        describe('.exec()', function() {

            before(async function() {
                this.data = await this.api.shipping
                    .getQuote({
                        data: 'test'
                    })
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(this.api.shipping.getQuote().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('GetShippingQuote').required();
                Joi.assert(this.data.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    ShippingQuote: {
                        data: 'test'
                    }
                };
                Joi.assert(this.data.body, schema);
            });

        });

    });

    describe('.getMethods()', function() {

        describe('.exec()', function() {

            before(async function() {
                this.data = await this.api.shipping
                    .getMethods()
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(this.api.shipping.getMethods().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('GetShippingMethods').required();
                Joi.assert(this.data.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {};
                Joi.assert(this.data.body, schema);
            });

        });

    });

});