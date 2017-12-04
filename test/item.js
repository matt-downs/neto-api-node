const assert = require('assert');
const Joi = require('Joi');


describe('item', function() {

    it('should contain a .add() function', function() {
        Joi.assert(this.api.item.add, Joi.func());
    });

    it('should contain a .get() function', function() {
        Joi.assert(this.api.item.get, Joi.func());
    });

    it('should contain a .update() function', function() {
        Joi.assert(this.api.item.update, Joi.func());
    });

    describe('.add()', function() {
        describe('request', function() {
            before(function() {
                this.data = this.api.item
                    .add({ SKU: 'test' })
                    .add([{ SKU: 'test2' }, { SKU: 'test3' }])
                    .add({ SKU: 'test4' })
                    .exec({ debug: true });
            });

            it('should contain the correct API action', function() {
                Joi.assert(this.data.action, 'AddItem');
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Item: Joi.array()
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
        describe('request', function() {
            before(function() {
                this.data = this.api.item
                    .get({ SKU: 'test' })
                    .output([])
                    .exec({ debug: true });
            });

            it('should contain the correct API action', function() {
                Joi.assert(this.data.action, 'GetItem');
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    action: Joi.string(),
                    body: {
                        Filter: {
                            SKU: Joi.string(),
                            OutputSelector: Joi.array().required()
                        }
                    }
                };
                Joi.assert(this.data, schema);
            });
        });
    });

    describe('.update()', function() {
        describe('request', function() {
            before(function() {
                this.data = this.api.item
                    .update({ SKU: 'test' })
                    .update([{ SKU: 'test2' }, { SKU: 'test3' }])
                    .update({ SKU: 'test4' })
                    .exec({ debug: true });
            });

            it('should contain the correct API action', function() {
                Joi.assert(this.data.action, 'UpdateItem');
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Item: Joi.array()
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