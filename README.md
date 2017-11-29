# neto-api-node
A Node.js wrapper for the Neto API.

**This is a work in progress.**

## getProducts example: 
```javascript
const Neto = require('./index');

let api = new Neto({
    url: 'https://mysite.neto.com.au',
    user: 'user',
    key: 'api-key'
});

api.getItem()
    .filter({ SKU: ['smp_1', 'smp_2'] })
    .output(['Model', 'DefaultPrice'])
    .exec()
    .then((response) => {
        for (let product of response.Item) {
            console.log(product);
        }
    })
    .catch((err) => console.error(err));
```


## Endpoints supported
- [ ] Products
    - [x] GetProducts


## Potential future features
- [ ] JOI validation
    - [ ] Validate values passed into .filter() and .output()
    - [ ] Create global config to enable/disable JOI


API documentation available at:
http://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/getting-started/