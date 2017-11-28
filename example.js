const Neto = require('./index');
const credentials = require('./credentials.json');


let api = new Neto({
    url: credentials.url,
    user: credentials.user,
    key: credentials.key
});


api.getProducts()
    .filter({ SKU: ['smp_1', 'smp_2'] })
    .output(['Model', 'DefaultPrice'])
    .exec()
    .then((response) => {
        for (let product of response.Item) {
            console.log(product);
        }
    })
    .catch((err) => console.error(err));