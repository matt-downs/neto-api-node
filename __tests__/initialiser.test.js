const { NetoAPI } = require("../dist/index");

describe("initialiser", () => {
  it("should throw exception if key, oauth_clientId and oauth_secret are missing from config", () => {
    // Arrange
    const myFunction = () => {
      new NetoAPI({
        url: "https://someurl.com"
      });
    };

    // Act

    // Assert
    expect(myFunction).toThrowError(
      /^key or oauth_clientId \+ oauth_secret must be specified$/
    );
  });

  it("should throw exception if oauth_secret is missing from config", () => {
    // Arrange
    const myFunction = () => {
      new NetoAPI({
        url: "https://someurl.com",
        oauth_clientId: "someclientid"
      });
    };

    // Act

    // Assert
    expect(myFunction).toThrowError(
      /^key or oauth_clientId \+ oauth_secret must be specified$/
    );
  });

  it("should throw exception if oauth_clientId is missing from config", () => {
    // Arrange
    const myFunction = () => {
      new NetoAPI({
        url: "https://someurl.com",
        oauth_secret: "somesecret"
      });
    };

    // Act

    // Assert
    expect(myFunction).toThrowError(
      /^key or oauth_clientId \+ oauth_secret must be specified$/
    );
  });

  it("should throw exception if url is missing from config", () => {
    // Arrange
    const myFunction = () => {
      new NetoAPI({
        key: "somekey"
      });
    };

    // Act

    // Assert
    expect(myFunction).toThrowError(/^url must be specified$/);
  });

  it("should initialise properly with url and key", () => {
    // Arrange
    const mySite = new NetoAPI({
      url: "https://someurl.com",
      key: "somekey"
    });

    // Act

    // Assert
    expect(mySite).toBeInstanceOf(NetoAPI);
  });

  it("should initialise properly with url, oauth_clientId and oauth_secret", () => {
    // Arrange
    const mySite = new NetoAPI({
      url: "https://someurl.com",
      oauth_clientId: "someclientid",
      oauth_secret: "somesecret"
    });

    // Act

    // Assert
    expect(mySite).toBeInstanceOf(NetoAPI);
  });
});
