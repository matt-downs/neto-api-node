const { NetoAPI } = require('../dist/index');


before(function() {
    this.api = new NetoAPI({
        url: 'https://someurl.com',
        user: 'someuser',
        key: 'somekey'
    });
});
