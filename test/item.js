const assert = require('assert');
const Joi = require('Joi');


describe('item', function() {

    describe('.add()', function() {
        before(function() {
            this.data = this.api.item
                .add({ SKU: 'test' })
                .add([{ SKU: 'test2' }, { SKU: 'test3' }])
                .add({ SKU: 'test4' })
                .exec({ debug: true });
        });

        it('request should contain the correct API action', function() {
            Joi.assert(this.data.action, 'AddItem');
        });

        it('request should fit the correct body schema', function() {
            let schema = {
                Item: Joi.array()
            };
            Joi.assert(this.data.body, schema);
        });

        it('request should contain the correct number of items', function() {
            let schema = {
                Item: Joi.array().length(4)
            };
            Joi.assert(this.data.body, schema);
        });
    });

    describe('.get()', function() {
        before(function() {
            this.data = this.api.item
                .get({ SKU: 'test' })
                .output([])
                .exec({ debug: true });
        });

        it('request should contain the correct API action', function() {
            Joi.assert(this.data.action, 'GetItem');
        });

        it('request should fit the correct body schema', function() {
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

    describe('.update()', function() {
        before(function() {
            this.data = this.api.item
                .update({ SKU: 'test' })
                .update([{ SKU: 'test2' }, { SKU: 'test3' }])
                .update({ SKU: 'test4' })
                .exec({ debug: true });
        });

        it('request should contain the correct API action', function() {
            Joi.assert(this.data.action, 'UpdateItem');
        });

        it('request should fit the correct body schema', function() {
            let schema = {
                Item: Joi.array()
            };
            Joi.assert(this.data.body, schema);
        });

        it('request should contain the correct number of items', function() {
            let schema = {
                Item: Joi.array().length(4)
            };
            Joi.assert(this.data.body, schema);
        });
    });

});