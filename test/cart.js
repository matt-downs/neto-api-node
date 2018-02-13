const Joi = require('Joi');


describe('cart', function() {

    describe('.get()', function() {

        describe('.output()', function() {

            before(async function() {
                this.data = await this.api.cart
                    .get({ CartID: 'test' })
                    .output(['test1', 'test2'])
                    .exec({ debug: true });
            });

            it('should add the array param to the OutputSelector key',
                function() {
                    let schema = {
                        Filter: {
                            CartID: Joi.string(),
                            OutputSelector: Joi.array().items(
                                Joi.string().valid('test1'),
                                Joi.string().valid('test2')
                            ).required()
                        }
                    };
                    Joi.assert(this.data.body, schema);
                });

        });

        describe('.exec()', function() {

            before(async function() {
                this.data = await this.api.cart
                    .get({
                        CartID: 'test',
                        OutputSelector: ['test']
                    })
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(this.api.cart.get().exec().then, Joi.func()
                    .required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('GetCart').required();
                Joi.assert(this.data.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Filter: {
                        CartID: Joi.string(),
                        OutputSelector: Joi.array().required()
                    }
                };
                Joi.assert(this.data.body, schema);
            });
    
        });

    });

});
