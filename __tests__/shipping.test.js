const Joi = require('Joi');
const { setup } = require('./main.test.js');


let api;
beforeAll(function() {
    api = setup();
});


describe('shipping', function() {

    describe('.getQuote()', function() {

        describe('.exec()', function() {

            let req;
            beforeAll(async function() {
                req = await api.shipping
                    .getQuote({
                        data: 'test'
                    })
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(api.shipping.getQuote().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('GetShippingQuote').required();
                Joi.assert(req.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    ShippingQuote: {
                        data: 'test'
                    }
                };
                Joi.assert(req.body, schema);
            });

        });

    });

    describe('.getMethods()', function() {

        describe('.exec()', function() {

            let req;
            beforeAll(async function() {
                req = await api.shipping
                    .getMethods()
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(api.shipping.getMethods().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('GetShippingMethods').required();
                Joi.assert(req.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {};
                Joi.assert(req.body, schema);
            });

        });

    });

});