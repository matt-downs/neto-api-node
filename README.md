# neto-api-node
A Node.js wrapper for the Neto API.

**This is a work in progress.**

## Examples
- item
    - [add](#itemadd)
    - [get](#itemget)
    - [update](#itemupdate)
- order
    - [add](#orderadd)
    - [get](#orderget)
    - [update](#orderupdate)
    
### Initialisation
You will need to initialise the API like so:
```javascript
const Neto = require('./index');
const myAwesomeSite = new Neto({
    url: 'https://myawesomesite.neto.com.au',
    user: 'user',
    key: 'api-key'
});
```
### item.add
```javascript
myAwesomeSite.item
    .add({ SKU: 'smp_3' })
    .exec()
    .then((response) => {
        console.log(response);
    })
    .catch((err) => console.error(err));
```
### item.get
```javascript
myAwesomeSite.item
    .get({ SKU: 'smp_1' })
    .output(['Model', 'DefaultPrice'])
    .exec()
    .then((response) => {
        for (let product of response.Item) {
            console.log(product);
        }
    })
    .catch((err) => console.error(err));
```
### item.update
```javascript
myAwesomeSite.item
    .update({ SKU: 'smp_3', Name: 'Updated name' })
    .exec()
    .then((response) => {
        console.log(response);
    })
    .catch((err) => console.error(err));
```
### order.add
```javascript
myAwesomeSite.order
    .add({ OrderID: 'DEMO123' })
    .exec()
    .then((response) => {
        console.log(response);
    })
    .catch((err) => console.error(err));
```
### order.get
```javascript
myAwesomeSite.order
    .get({ OrderStatus: ['New', 'Pick'] })
    .output(['OrderID'])
    .exec()
    .then((response) => {
        for (let order of response.Order) {
            console.log(order);
        }
    })
    .catch((err) => console.error(err));
```
### order.update
```javascript
myAwesomeSite.order
    .update({ OrderID: 'DEMO123' OrderStatus: 'Dispatched'})
    .exec()
    .then((response) => {
        for (let order of response.Order) {
            console.log(order);
        }
    })
    .catch((err) => console.error(err));
```


## Endpoint actions supported
- [ ] Accounting
    - [ ] `UpdateAccountingSystemRelatedAccount`
    - [ ] `DeleteAccountingSystemRelatedAccount`
    - [ ] `AddAccountingSystemRelatedAccount`
    - [ ] `GetAccountingSystemRelatedAccounts`
- [x] Cart
    - [x] `GetCart`
- [x] Category
    - [x] `AddCategory`
    - [x] `GetCategory`
    - [x] `UpdateCategory`
- [x] Content
    - [x] `AddContent`
    - [x] `GetContent`
    - [x] `UpdateContent`
- [ ] Currency
    - [ ] `GetCurrencySettings`
    - [ ] `UpdateCurrencySettings`
- [ ] Customer
    - [x] `AddCustomer`
    - [x] `GetCustomer`
    - [x] `UpdateCustomer`
    - [ ] `AddCustomerLog`
    - [ ] `UpdateCustomerLog`
- [x] Item
    - [x] `AddItem`
    - [x] `GetItem`
    - [x] `UpdateItem`
- [x] Order
    - [x] `AddOrder`
    - [x] `GetOrder`
    - [x] `UpdateOrder`
- [ ] Payment
    - [ ] `AddPayment`
    - [ ] `GetPayment`
    - [ ] `GetPaymentMethods`
- [ ] RMA
    - [ ] `AddRma`
    - [ ] `GetRma`
- [ ] Shipping
    - [ ] `GetShippingMethods`
    - [ ] `GetShippingQuote`
- [ ] Supplier
    - [ ] `GetSupplier`
    - [ ] `UpdateSupplier`
    - [ ] `AddSupplier`
- [ ] Voucher
    - [ ] `UpdateVoucher`
    - [ ] `AddVoucher`
    - [ ] `GetVoucher`
- [ ] Warehouse
    - [ ] `AddWarehouse`
    - [ ] `UpdateWarehouse`
    - [ ] `GetWarehouse`


## Potential future steps
- [ ] JOI validation
    - [ ] Validate values passed into .filter() and .output()
    - [ ] Create global config to enable/disable JOI
- [ ] Add to the ![ProgrammableWeb Neto API SDK page](https://www.programmableweb.com/api/neto/sdks)

API documentation available at:
http://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/getting-started/