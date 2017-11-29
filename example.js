const Neto = require('./index');
const credentials = require('./credentials.json');


let api = new Neto({
    url: credentials.url,
    user: credentials.user,
    key: credentials.key
});


// api.item
//     .get({ SKU: 'smp_1' })
//     .get({ SKU: 'smp_2' })
//     .debug()
//     .output(['Model', 'DefaultPrice'])
//     .exec()
//     .then((response) => {
//         for (let product of response.Item) {
//             console.log(product);
//         }
//     })
//     .catch((err) => console.error(err));



api.item
    .update({ SKU: 'smp_1' })
    .exec()
    .then((response) => {
        console.log(response);
    })
    .catch((err) => console.error(err));