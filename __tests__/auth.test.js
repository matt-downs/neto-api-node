const { NetoAPI } = require("../dist/index");
const nock = require("nock");
const { genericApiResponse } = require("./genericConfigs.json");

beforeEach(() => {
  nock.cleanAll();
});

describe("key", () => {
  test("should be present in request header if specified", async () => {
    // Arrange
    const mySite = new NetoAPI({ url: "https://someurl.com", key: "somekey" });
    const scope = nock("https://someurl.com", {
      reqheaders: {
        netoapi_action: "GetItem",
        Accept: "application/json",
        NETOAPI_KEY: "somekey"
      }
    })
      .post("/do/WS/NetoAPI")
      .reply(200, genericApiResponse);

    // Act
    await mySite.item
      .get({
        genericKey: "genericValue"
      })
      .output(["outputSelectorField1", "outputSelectorField1"])
      .exec();

    // Assert
    expect(scope.isDone()).toBe(true);
  });
});

describe("user", () => {
  test("should be present in request header if specified", async () => {
    // Arrange
    const mySite = new NetoAPI({
      url: "https://someurl.com",
      key: "somekey",
      user: "someuser"
    });
    const scope = nock("https://someurl.com", {
      reqheaders: {
        netoapi_action: "GetItem",
        Accept: "application/json",
        NETOAPI_KEY: "somekey",
        NETOAPI_USERNAME: "someuser"
      }
    })
      .post("/do/WS/NetoAPI")
      .reply(200, genericApiResponse);

    // Act
    await mySite.item
      .get({
        genericKey: "genericValue"
      })
      .output(["outputSelectorField1", "outputSelectorField1"])
      .exec();

    // Assert
    expect(scope.isDone()).toBe(true);
  });
});

describe("oauth_clientId & oauth_secret", () => {
  test("should be present in request header if specified", async () => {
    // Arrange
    const mySite = new NetoAPI({
      url: "https://someurl.com",
      oauth_clientId: "someclientid",
      oauth_secret: "somesecret"
    });
    const scope = nock("https://someurl.com", {
      reqheaders: {
        netoapi_action: "GetItem",
        Accept: "application/json",
        X_ACCESS_KEY: "someclientid",
        X_SECRET_KEY: "somesecret"
      }
    })
      .post("/do/WS/NetoAPI")
      .reply(200, genericApiResponse);

    // Act
    await mySite.item
      .get({
        genericKey: "genericValue"
      })
      .output(["outputSelectorField1", "outputSelectorField1"])
      .exec();

    // Assert
    expect(scope.isDone()).toBe(true);
  });
});
