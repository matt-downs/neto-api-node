# neto-api-node
A promise based Neto API client for Node.

**This is a work in progress.**

## Basic syntax
Once the library is initialised, you can use it like so:
```javascript
api.[type]     // See below for a list of supported types
    .[method]() // See below for a list of methods for each type (generally add, get or update)
    .exec()     // Returns a promise that resolves with the API response in JSON format
```

## Supported types and methods
### .cart 
- .get() `GetCart`
### .category
- .add() `AddCategory`
- .get() `GetCategory`
- .update() `UpdateCategory`
### .content
- .add() `AddContent`
- .get() `GetContent`
- .update() `UpdateContent`
### .currency
- .getSettings() `GetCurrencySettings`
- .updateSettings() `UpdateCurrencySettings`
### .customer
- .add() `AddCustomer`
- .get() `GetCustomer`
- .update() `UpdateCustomer`
- .addLog() `AddCustomerLog`
- .updateLog() `UpdateCustomerLog`
### .item
- .add() `AddItem`
- .get() `GetItem`
- .update() `UpdateItem`
### .order
- .add() `AddOrder`
- .get() `GetOrder`
- .update() `UpdateOrder`
### .payment
- .add() `AddPayment`
- .get() `GetPayment`
- .getMethods() `GetPaymentMethods`
### .rma
- .add() `AddRma`
- .get() `GetRma`
### .shipping
- .getMethods() `GetShippingMethods`
- .getQuote() `GetShippingQuote`
### .supplier
- .get() `GetSupplier`
- .update() `UpdateSupplier`
- .add() `AddSupplier`
### .voucher
- .update() `UpdateVoucher`
- .add() `AddVoucher`
- .get() `GetVoucher`
### .warehouse
- .add() `AddWarehouse`
- .update() `UpdateWarehouse`
- .get() `GetWarehouse`


## Initialisation
Before you start making calls, you will need to initialise the API like so:
```javascript
const Neto = require('./index');
const api = new Neto({
    url: 'https://myawesomesite.neto.com.au',
    user: 'user',
    key: 'api-key'
});
```


## Examples
- item
    - [add](#itemadd)
    - [get](#itemget)
    - [update](#itemupdate)

### item.add
```javascript
api.item
    .add({ SKU: 'smp_3' })
    .exec()
    .then((response) => {
        console.log(response);
    })
    .catch((e) => console.log(e));
```
### order.get
```javascript
api.order
    .get({ OrderStatus: ['New', 'Pick'] })
    .output(['OrderID'])
    .exec()
    .then((response) => {
        for (let order of response.Order) {
            console.log(order);
        }
    })
    .catch((e) => console.log(e));
```
### customer.update
```javascript
api.customer
    .update({ Username: 'someguy', EmailAddress: 'bob@email.com'})
    .exec()
    .then((response) => {
        console.log(response);
    })
    .catch((e) => console.log(e));
```


## Advanced usage
### Chaining
`.add()` and `.update()` methods can be chained together with themselves to improve readability. Check it out below:
```javascript
api.item
    .add({ SKU: 'smp_1' })
    .add({ SKU: 'smp_2' })
    .add({ SKU: 'smp_3' })
    .exec()
    .then((response) => {
        console.log(response);
    })
    .catch((e) => console.log(e));
```
Chaining `.get()` methods will be supported soon.

### async/await support
Because this library utilises promises, it fully supports the `async` and `await` operators. Here's an example:
```javascript
async function addItem() {
    try {
        var response = await api.item.add({ SKU: 'smp_1' }).exec()
        console.log(response);
    } catch (e) console.log(e)
}
addItem();
```
It's that easy!


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
- [x] Currency
    - [x] `GetCurrencySettings`
    - [x] `UpdateCurrencySettings`
- [x] Customer
    - [x] `AddCustomer`
    - [x] `GetCustomer`
    - [x] `UpdateCustomer`
    - [x] `AddCustomerLog`
    - [x] `UpdateCustomerLog`
- [x] Item
    - [x] `AddItem`
    - [x] `GetItem`
    - [x] `UpdateItem`
- [x] Order
    - [x] `AddOrder`
    - [x] `GetOrder`
    - [x] `UpdateOrder`
- [x] Payment
    - [x] `AddPayment`
    - [x] `GetPayment`
    - [x] `GetPaymentMethods`
- [x] RMA
    - [x] `AddRma`
    - [x] `GetRma`
- [x] Shipping
    - [x] `GetShippingMethods`
    - [x] `GetShippingQuote`
- [x] Supplier
    - [x] `GetSupplier`
    - [x] `UpdateSupplier`
    - [x] `AddSupplier`
- [x] Voucher
    - [x] `UpdateVoucher`
    - [x] `AddVoucher`
    - [x] `GetVoucher`
- [x] Warehouse
    - [x] `AddWarehouse`
    - [x] `UpdateWarehouse`
    - [x] `GetWarehouse`


## Potential future steps
- [ ] JOI validation
    - [ ] Validate values passed into .filter() and .output()
    - [ ] Create global config to enable/disable JOI
- [ ] Add to the [ProgrammableWeb Neto API SDK page](https://www.programmableweb.com/api/neto/sdks)
- [ ] TypeScript support

API documentation available at:
http://developers.neto.com.au/documentation/engineers/api-documentation/getting-started/getting-started/