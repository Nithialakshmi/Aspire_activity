var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(variety) {
        this.Variety = variety;
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(variety, price) {
        var _this = _super.call(this, variety) || this;
        _this.Price = price;
        return _this;
    }
    Dog.prototype.display = function () {
        console.log("Variety of the Dog: " + this.Variety);
        console.log("Price of Dog: " + this.Price);
    };
    return Dog;
}(Animal));
var obj = new Dog(" Labradon", 8500000);
obj.display();
