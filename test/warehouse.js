const Joi = require('Joi');


describe('warehouse', function() {

    describe('.add()', function() {

        describe('.exec()', function() {

            before(async function() {
                this.data = await this.api.warehouse
                    .add({ Name: 'test' })
                    .add([{ Name: 'test2' }, { Name: 'test3' }])
                    .add({ Name: 'test4' })
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(this.api.warehouse.add().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('AddWarehouse').required();
                Joi.assert(this.data.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Warehouse: Joi.array().required().length(4).items(
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
                this.data = await this.api.warehouse
                    .get({
                        ID: 'test'
                    })
                    .output(['test1', 'test2'])
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(this.api.warehouse.get().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('GetWarehouse').required();
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
                this.data = await this.api.warehouse
                    .update({ Name: 'test' })
                    .update([{ Name: 'test2' }, { Name: 'test3' }])
                    .update({ Name: 'test4' })
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(this.api.warehouse.update().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('UpdateWarehouse').required();
                Joi.assert(this.data.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Warehouse: Joi.array().required().length(4).items(
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
