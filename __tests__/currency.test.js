const Joi = require('Joi');
const { setup } = require('./main.test.js');


let api;
beforeAll(function() {
    api = setup();
});


describe('currency', function() {

    describe('.getSettings()', function() {

        describe('.exec()', function() {

            it('should return a promise', function() {
                Joi.assert(api.currency.getSettings().exec().then, Joi.func().required());
            });

        })

        describe('request', function() {

            let req;
            beforeAll(async function() {
                req = await api.currency
                    .getSettings()
                    .exec({ debug: true });
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('GetCurrencySettings').required();
                Joi.assert(req.action, schema);
            });

        });
        
    });


    describe('.updateSettings()', function() {
        
        describe('.exec()', function() {

            it('should return a promise', function() {
                Joi.assert(api.currency.updateSettings().exec().then, Joi.func().required());
            });

        })

        describe('request', function() {

            let req;
            beforeAll(async function() {
                req = await api.currency
                    .updateSettings({ DEFAULTCOUNTRY: 'test' })
                    .exec({ debug: true });
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('UpdateCurrencySettings').required();
                Joi.assert(req.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    CurrencySettings: {
                        DEFAULTCOUNTRY: Joi.string().required()
                    }
                };
                Joi.assert(req.body, schema);
            });

        });

    });

});