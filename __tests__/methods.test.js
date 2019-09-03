const { NetoAPI } = require("../dist/index");
const nock = require("nock");
const {
  apiConfig,
  nockConfig,
  genericApiResponse
} = require("./genericConfigs.json");

beforeEach(() => {
  nock.cleanAll();
});

describe.each`
  type           | method              | apiAction
  ${"cart"}      | ${"get"}            | ${"GetCart"}
  ${"category"}  | ${"add"}            | ${"AddCategory"}
  ${"category"}  | ${"get"}            | ${"GetCategory"}
  ${"category"}  | ${"update"}         | ${"UpdateCategory"}
  ${"content"}   | ${"add"}            | ${"AddContent"}
  ${"content"}   | ${"get"}            | ${"GetContent"}
  ${"content"}   | ${"update"}         | ${"UpdateContent"}
  ${"currency"}  | ${"getSettings"}    | ${"GetCurrencySettings"}
  ${"currency"}  | ${"updateSettings"} | ${"UpdateCurrencySettings"}
  ${"customer"}  | ${"add"}            | ${"AddCustomer"}
  ${"customer"}  | ${"get"}            | ${"GetCustomer"}
  ${"customer"}  | ${"update"}         | ${"UpdateCustomer"}
  ${"customer"}  | ${"addLog"}         | ${"AddCustomerLog"}
  ${"customer"}  | ${"updateLog"}      | ${"UpdateCustomerLog"}
  ${"item"}      | ${"add"}            | ${"AddItem"}
  ${"item"}      | ${"get"}            | ${"GetItem"}
  ${"item"}      | ${"update"}         | ${"UpdateItem"}
  ${"order"}     | ${"add"}            | ${"AddOrder"}
  ${"order"}     | ${"get"}            | ${"GetOrder"}
  ${"order"}     | ${"update"}         | ${"UpdateOrder"}
  ${"payment"}   | ${"add"}            | ${"AddPayment"}
  ${"payment"}   | ${"get"}            | ${"GetPayment"}
  ${"payment"}   | ${"getMethods"}     | ${"GetPaymentMethods"}
  ${"rma"}       | ${"add"}            | ${"AddRma"}
  ${"rma"}       | ${"get"}            | ${"GetRma"}
  ${"shipping"}  | ${"getMethods"}     | ${"GetShippingMethods"}
  ${"shipping"}  | ${"getQuote"}       | ${"GetShippingQuote"}
  ${"supplier"}  | ${"add"}            | ${"AddSupplier"}
  ${"supplier"}  | ${"get"}            | ${"GetSupplier"}
  ${"supplier"}  | ${"update"}         | ${"UpdateSupplier"}
  ${"voucher"}   | ${"add"}            | ${"AddVoucher"}
  ${"voucher"}   | ${"get"}            | ${"GetVoucher"}
  ${"voucher"}   | ${"update"}         | ${"UpdateVoucher"}
  ${"warehouse"} | ${"add"}            | ${"AddWarehouse"}
  ${"warehouse"} | ${"get"}            | ${"GetWarehouse"}
  ${"warehouse"} | ${"update"}         | ${"UpdateWarehouse"}
`("$type", ({ type, method, apiAction }) => {
  describe(`.${method}()`, () => {
    test("should generate the correct request", async () => {
      // Arrange
      const mySite = new NetoAPI(apiConfig);
      let requestBody;
      const scope = nock(apiConfig.url, {
        reqheaders: {
          ...nockConfig.headers,
          netoapi_action: apiAction
        }
      })
        .post("/do/WS/NetoAPI", body => {
          requestBody = body;
          return true;
        })
        .reply(200, genericApiResponse);

      // Act
      let operation = mySite[type][method]({
        genericKey: "genericValue"
      });
      if (method === "get") {
        operation = operation.output([
          "outputSelectorField1",
          "outputSelectorField1"
        ]);
      }
      await operation.exec();

      // Assert
      expect(scope.isDone()).toBe(true);
      expect(requestBody).toMatchSnapshot();
    });

    test("should return the response", async () => {
      // Arrange
      const mySite = new NetoAPI(apiConfig);
      const scope = nock(apiConfig.url, {
        reqheaders: {
          ...nockConfig.headers,
          netoapi_action: apiAction
        }
      })
        .post("/do/WS/NetoAPI")
        .reply(200, genericApiResponse);

      // Act
      // Act
      let operation = mySite[type][method]({
        genericKey: "genericValue"
      });
      if (method === "get") {
        operation = operation.output([
          "outputSelectorField1",
          "outputSelectorField1"
        ]);
      }
      const response = await operation.exec();

      // Assert
      expect(scope.isDone()).toBe(true);
      expect(response).toMatchSnapshot();
    });
  });
});
