const Neto = require('./index');

const credentials = require('./credentials.json');


let api = new Neto({
    url: credentials.url,
    user: credentials.user,
    key: credentials.key
});


api.getProducts()
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.error(err);
    });