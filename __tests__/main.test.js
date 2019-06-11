const { NetoAPI } = require("../dist/index");
const assert = require("assert");

module.exports.setup = () => {
  return new NetoAPI({
    url: "https://someurl.com",
    user: "someuser",
    key: "somekey"
  });
};

describe("initialiser", function() {
  it("should throw exception if key, oauth_clientId and oauth_secret are missing from config", function() {
    const myFunction = () => {
      new NetoAPI({
        url: "https://someurl.com"
      });
    };

    expect(myFunction).toThrowError(
      /^key or oauth_clientId \+ oauth_secret must be specified$/
    );
  });

  it("should throw exception if oauth_secret is missing from config", function() {
    const myFunction = () => {
      new NetoAPI({
        url: "https://someurl.com",
        oauth_clientId: "someclientid"
      });
    };

    expect(myFunction).toThrowError(
      /^key or oauth_clientId \+ oauth_secret must be specified$/
    );
  });

  it("should throw exception if oauth_clientId is missing from config", function() {
    const myFunction = () => {
      new NetoAPI({
        url: "https://someurl.com",
        oauth_secret: "somesecret"
      });
    };

    expect(myFunction).toThrowError(
      /^key or oauth_clientId \+ oauth_secret must be specified$/
    );
  });

  it("should throw exception if url is missing from config", function() {
    const myFunction = () => {
      new NetoAPI({
        key: "somekey"
      });
    };

    expect(myFunction).toThrowError(/^url must be specified$/);
  });

  it("should initialise properly with url and key", function() {
    const mySite = new NetoAPI({
      url: "https://someurl.com",
      key: "somekey"
    });

    expect(mySite).toBeInstanceOf(NetoAPI);
  });

  it("should initialise properly with url, oauth_clientId and oauth_secret", function() {
    const mySite = new NetoAPI({
      url: "https://someurl.com",
      oauth_clientId: "someclientid",
      oauth_secret: "somesecret"
    });

    expect(mySite).toBeInstanceOf(NetoAPI);
  });
});
