const { NetoAPI } = require("../dist/index");
const assert = require("assert");

describe("initialiser", function() {
  it("should throw exception if key is missing from config", function() {
    const myFunction = () => {
      new NetoAPI({
        url: "https://someurl.com"
      });
    };
    assert.throws(myFunction, /key must be specified/);
  });

  it("should throw exception if url is missing from config", function() {
    const myFunction = () => {
      new NetoAPI({
        key: "somekey"
      });
    };
    assert.throws(myFunction, /url must be specified/);
  });
});
