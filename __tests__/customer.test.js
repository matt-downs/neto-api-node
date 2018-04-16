const Joi = require('Joi');
const { setup } = require('./main.test.js');


let api;
beforeAll(function() {
    api = setup();
});


describe('customer', function() {

    describe('.add()', function() {

        describe('.exec()', function() {

            let req;
            beforeAll(async function() {
                req = await api.customer
                    .add({ Name: 'test' })
                    .add([{ Name: 'test2' }, { Name: 'test3' }])
                    .add({ Name: 'test4' })
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(api.customer.add().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('AddCustomer').required();
                Joi.assert(req.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Customer: Joi.array().required().length(4).items(
                        Joi.object().required().keys({
                            Name: Joi.string().required()
                        })
                    )
                };
                Joi.assert(req.body, schema);
            });

        })

    });

    describe('.get()', function() {

        describe('.exec()', function() {

            let req;
            beforeAll(async function() {
                req = await api.customer
                    .get({
                        ID: 'test'
                    })
                    .output(['test1', 'test2'])
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(api.customer.get().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('GetCustomer').required();
                Joi.assert(req.action, schema);
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
                Joi.assert(req.body, schema);
            });

        });

    });

    describe('.update()', function() {

        describe('.exec()', function() {

            let req;
            beforeAll(async function() {
                req = await api.customer
                    .update({ Name: 'test' })
                    .update([{ Name: 'test2' }, { Name: 'test3' }])
                    .update({ Name: 'test4' })
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(api.customer.update().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('UpdateCustomer').required();
                Joi.assert(req.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    Customer: Joi.array().required().length(4).items(
                        Joi.object().required().keys({
                            Name: Joi.string().required()
                        })
                    )
                };
                Joi.assert(req.body, schema);
            });

        })

    });

    describe('.addLog()', function() {

        describe('.exec()', function() {

            let req;
            beforeAll(async function() {
                req = await api.customer
                    .addLog({ Name: 'test' })
                    .addLog([{ Name: 'test2' }, { Name: 'test3' }])
                    .addLog({ Name: 'test4' })
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(api.customer.addLog().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('AddCustomerLog').required();
                Joi.assert(req.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    CustomerLogs: {
                        CustomerLog: Joi.array().required().length(4).items(
                            Joi.object().required().keys({
                                Name: Joi.string().required()
                            })
                        )
                    }
                };
                Joi.assert(req.body, schema);
            });

        })

    });

    describe('.updateLog()', function() {

        describe('.exec()', function() {

            let req;
            beforeAll(async function() {
                req = await api.customer
                    .updateLog({ Name: 'test' })
                    .updateLog([{ Name: 'test2' }, { Name: 'test3' }])
                    .updateLog({ Name: 'test4' })
                    .exec({ debug: true });
            });

            it('should return a promise', function() {
                Joi.assert(api.customer.updateLog().exec().then, Joi.func().required());
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('UpdateCustomerLog').required();
                Joi.assert(req.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    CustomerLogs: {
                        CustomerLog: Joi.array().required().length(4).items(
                            Joi.object().required().keys({
                                Name: Joi.string().required()
                            })
                        )
                    }
                };
                Joi.assert(req.body, schema);
            });

        })

    });

});
