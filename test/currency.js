const Joi = require('Joi');


describe('currency', function() {

    describe('.getSettings()', function() {

        describe('.exec()', function() {

            it('should return a promise', function() {
                Joi.assert(this.api.currency.getSettings().exec().then, Joi.func().required());
            });

        })

        describe('request', function() {

            before(async function() {
                this.data = await this.api.currency
                    .getSettings()
                    .exec({ debug: true });
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('GetCurrencySettings').required();
                Joi.assert(this.data.action, schema);
            });

        });
        
    });


    describe('.updateSettings()', function() {
        
        describe('.exec()', function() {

            it('should return a promise', function() {
                Joi.assert(this.api.currency.updateSettings().exec().then, Joi.func().required());
            });

        })

        describe('request', function() {

            before(async function() {
                this.data = await this.api.currency
                    .updateSettings({ DEFAULTCOUNTRY: 'test' })
                    .exec({ debug: true });
            });

            it('should contain the correct API action', function() {
                let schema = Joi.string().valid('UpdateCurrencySettings').required();
                Joi.assert(this.data.action, schema);
            });

            it('should fit the correct body schema', function() {
                let schema = {
                    CurrencySettings: {
                        DEFAULTCOUNTRY: Joi.string().required()
                    }
                };
                Joi.assert(this.data.body, schema);
            });

        });

    });

});