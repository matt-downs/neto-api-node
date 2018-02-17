const Joi = require('Joi');


describe('category', function() {

    describe('.add()', function() {

        describe('.exec()', function() {

            before(async function() {
                this.data = await this.api.category
                    .add({ Name: 'test' })
                    .add([{ Name: 'test2' }, { Name: 'test3' }])
                    .add({ Name: 'test4' })
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(this.api.category.add().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('AddCategory').required();
                Joi.assert(this.data.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Category: Joi.array().required().length(4).items(
                        Joi.object().required().keys({
                            Name: Joi.string().required()
                        })
                    )
                };
                Joi.assert(this.data.body, schema);
            });

        })

    });

    describe('.get()', function() {

        describe('.exec()', function() {

            before(async function() {
                this.data = await this.api.category
                    .get({
                        ID: 'test'
                    })
                    .output(['test1', 'test2'])
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(this.api.category.get().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('GetCategory').required();
                Joi.assert(this.data.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Filter: {
                        ID: Joi.string().valid('test').required(),
                        OutputSelector: Joi.array().required().items(
                            Joi.string().valid('test1').required(),
                            Joi.string().valid('test2').required()
                        )
                    }
                };
                Joi.assert(this.data.body, schema);
            });

        });

    });

    describe('.update()', function() {

        describe('.exec()', function() {

            before(async function() {
                this.data = await this.api.category
                    .update({ Name: 'test' })
                    .update([{ Name: 'test2' }, { Name: 'test3' }])
                    .update({ Name: 'test4' })
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(this.api.category.update().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('UpdateCategory').required();
                Joi.assert(this.data.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Category: Joi.array().required().length(4).items(
                        Joi.object().required().keys({
                            Name: Joi.string().required()
                        })
                    )
                };
                Joi.assert(this.data.body, schema);
            });

        })

    });

});
