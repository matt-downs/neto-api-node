const Neto = require('../index');


before(function() {
    this.api = new Neto({
        url: 'https://someurl.com',
        user: 'someuser',
        key: 'somekey'
    });
});
