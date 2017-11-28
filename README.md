# neto-api-node
A Node.js wrapper for the Neto API.

This is the goal: 
```javascript
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
```

**This is a work in progress.**

http://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/getting-started/
