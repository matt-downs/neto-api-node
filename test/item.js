const Joi = require('Joi');


describe('item', function() {

    describe('.add()', function() {

        it('should be a function', function() {
            Joi.assert(this.api.item.add, Joi.func().required());
        });

        describe('.exec()', function() {

            it('should be a function', function() {
                Joi.assert(this.api.item.add().exec, Joi.func().required());
            });

            it('should return a promise', function() {
                Joi.assert(this.api.item.add().exec().then, Joi.func()
                    .required());
            });

        })

        describe('request', function() {

            before(function() {
                this.data = this.api.item
                    .add({ SKU: 'test' })
                    .add([{ SKU: 'test2' }, { SKU: 'test3' }])
                    .add({ SKU: 'test4' })
                    .exec({ debug: true });
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('AddItem').required();
                Joi.assert(this.data.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Item: Joi.array().required()
                };
                Joi.assert(this.data.body, schema);
            });

            it('should contain the correct number of items', function() {
                let schema = {
                    Item: Joi.array().length(4)
                };
                Joi.assert(this.data.body, schema);
            });

        });

    });

    describe('.get()', function() {

        it('should be a function', function() {
            Joi.assert(this.api.item.get, Joi.func().required());
        });
    
        describe('.exec()', function() {

            it('should be a function', function() {
                Joi.assert(this.api.item.get().exec, Joi.func().required());
            });

            it('should return a promise', function() {
                Joi.assert(this.api.item.get().exec().then, Joi.func()
                    .required());
            });

        })

        describe('.output()', function() {
            
            before(function() {
                this.data = this.api.item
                    .get({ SKU: 'test' })
                    .output(['test1', 'test2'])
                    .exec({ debug: true });
            });

            it('should be a function', function() {
                Joi.assert(this.api.item.get().output, Joi.func().required());
            });

            it('should add the array param to the OutputSelector key',
                function() {
                    let schema = {
                        Filter: {
                            SKU: Joi.string(),
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

            before(function() {
                this.data = this.api.item
                    .get({
                        SKU: 'test',
                        OutputSelector: ['test']
                    })
                    .exec({ debug: true });
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('GetItem').required();
                Joi.assert(this.data.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Filter: {
                        SKU: Joi.string(),
                        OutputSelector: Joi.array().required()
                    }
                };
                Joi.assert(this.data.body, schema);
            });

        });

    });

    describe('.update()', function() {

        it('should be a function', function() {
            Joi.assert(this.api.item.update, Joi.func().required());
        });
        
        describe('.exec()', function() {

            it('should be a function', function() {
                Joi.assert(this.api.item.update().exec, Joi.func().required());
            });

            it('should return a promise', function() {
                Joi.assert(this.api.item.update().exec().then, Joi.func()
                    .required());
            });

        })

        describe('request', function() {

            before(function() {
                this.data = this.api.item
                    .update({ SKU: 'test' })
                    .update([{ SKU: 'test2' }, { SKU: 'test3' }])
                    .update({ SKU: 'test4' })
                    .exec({ debug: true });
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('UpdateItem').required();
                Joi.assert(this.data.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Item: Joi.array().required()
                };
                Joi.assert(this.data.body, schema);
            });

            it('should contain the correct number of items', function() {
                let schema = {
                    Item: Joi.array().length(4)
                };
                Joi.assert(this.data.body, schema);
            });

        });

    });

});