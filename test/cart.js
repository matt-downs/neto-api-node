const Joi = require('Joi');


describe('cart', function() {

    describe('.get()', function() {

        it('should be a function', function() {
            Joi.assert(this.api.cart.get, Joi.func().required());
        });

        describe('.exec()', function() {

            it('should be a function', function() {
                Joi.assert(this.api.cart.get().exec, Joi.func().required());
            });

            it('should return a promise', function() {
                Joi.assert(this.api.cart.get().exec().then, Joi.func()
                    .required());
            });

        })

        describe('.output()', function() {

            before(async function() {
                this.data = await this.api.cart
                    .get({ CartID: 'test' })
                    .output(['test1', 'test2'])
                    .exec({ debug: true });
            });

            it('should be a function', function() {
                Joi.assert(this.api.cart.get().output, Joi.func().required());
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

        describe('request', function() {

            before(async function() {
                this.data = await this.api.cart
                    .get({
                        CartID: 'test',
                        OutputSelector: ['test']
                    })
                    .exec({ debug: true });
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
