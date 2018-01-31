const Joi = require('Joi');


describe('category', function() {

    describe('.add()', function() {

        it('should be a function', function() {
            Joi.assert(this.api.category.add, Joi.func().required());
        });

        describe('.exec()', function() {

            it('should be a function', function() {
                Joi.assert(this.api.category.add().exec, Joi.func().required());
            });

            it('should return a promise', function() {
                Joi.assert(this.api.category.add().exec().then, Joi.func()
                    .required());
            });

        })

        describe('request', function() {

            before(async function() {
                this.data = await this.api.category
                    .add({ CategoryName: 'test' })
                    .add([{ CategoryName: 'test2' }, { CategoryName: 'test3' }])
                    .add({ CategoryName: 'test4' })
                    .exec({ debug: true });
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('AddCategory').required();
                Joi.assert(this.data.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Category: Joi.array().required()
                };
                Joi.assert(this.data.body, schema);
            });

            it('should contain the correct number of items', function() {
                let schema = {
                    Category: Joi.array().length(4)
                };
                Joi.assert(this.data.body, schema);
            });

        });

    });

    describe('.get()', function() {

        it('should be a function', function() {
            Joi.assert(this.api.category.get, Joi.func().required());
        });
    
        describe('.exec()', function() {

            it('should be a function', function() {
                Joi.assert(this.api.category.get().exec, Joi.func().required());
            });

            it('should return a promise', function() {
                Joi.assert(this.api.category.get().exec().then, Joi.func()
                    .required());
            });

        })

        describe('.output()', function() {
            
            before(async function() {
                this.data = await this.api.category
                    .get({ CategoryID: 'test' })
                    .output(['test1', 'test2'])
                    .exec({ debug: true });
            });

            it('should be a function', function() {
                Joi.assert(this.api.category.get().output, Joi.func().required());
            });

            it('should add the array param to the OutputSelector key',
                function() {
                    let schema = {
                        Filter: {
                            CategoryID: Joi.string(),
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
                this.data = await this.api.category
                    .get({
                        CategoryID: 'test',
                        OutputSelector: ['test']
                    })
                    .exec({ debug: true });
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('GetCategory').required();
                Joi.assert(this.data.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Filter: {
                        CategoryID: Joi.string(),
                        OutputSelector: Joi.array().required()
                    }
                };
                Joi.assert(this.data.body, schema);
            });

        });

    });

    describe('.update()', function() {

        it('should be a function', function() {
            Joi.assert(this.api.category.update, Joi.func().required());
        });
        
        describe('.exec()', function() {

            it('should be a function', function() {
                Joi.assert(this.api.category.update().exec, Joi.func().required());
            });

            it('should return a promise', function() {
                Joi.assert(this.api.category.update().exec().then, Joi.func()
                    .required());
            });

        })

        describe('request', function() {

            before(async function() {
                this.data = await this.api.category
                    .update({ CategoryID: 'test' })
                    .update([{ CategoryID: 'test2' }, { CategoryID: 'test3' }])
                    .update({ CategoryID: 'test4' })
                    .exec({ debug: true });
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('UpdateCategory').required();
                Joi.assert(this.data.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Category: Joi.array().required()
                };
                Joi.assert(this.data.body, schema);
            });

            it('should contain the correct number of items', function() {
                let schema = {
                    Category: Joi.array().length(4)
                };
                Joi.assert(this.data.body, schema);
            });

        });

    });

});