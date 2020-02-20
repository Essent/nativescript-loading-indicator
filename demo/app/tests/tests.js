var LoadingIndNs5 = require("nativescript-loading-ind-ns5").LoadingIndNs5;
var loadingIndNs5 = new LoadingIndNs5();

describe("greet function", function() {
    it("exists", function() {
        expect(loadingIndNs5.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(loadingIndNs5.greet()).toEqual("Hello, NS");
    });
});