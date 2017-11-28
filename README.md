# neto-api-node
A Node.js wrapper for the Neto API.

This is the dream: 
```javascript
api.getProducts
    .filter({
        SKU: 'smp_1'
    })
    .output(['Model', 'DefaultPrice'])
    .exec()
    .then((response) => {
        for (let product of response.Item){
            console.log(item);
        }
    })
    .catch((err) => {
        console.error(err)
    });
```
(See https://github.com/clarkie/dynogels#query for example syntax)

**This is a work in progress.**

http://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/getting-started/
