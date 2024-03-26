//duck typing
var Cat = /** @class */ (function () {
    function Cat() {
        this.sound = "meow";
    }
    return Cat;
}());
var Lion = /** @class */ (function () {
    function Lion() {
        this.sound = "roaring";
    }
    return Lion;
}());
var Goat = /** @class */ (function () {
    function Goat() {
        this.sound = "bleat";
    }
    Goat.prototype.swim = function () {
        console.log("Sound of animals");
    };
    return Goat;
}());
var lion = new Cat();
var cat = new Lion();
var lionTwo = new Goat();
console.log("Lion Sound: " + lion.sound);
console.log("Dog sound: " + cat.sound);
console.log("Lion sound: " + lionTwo.sound);
//list in number
var numbers = [21, 41, 65, 98, 63];
var firstNumber = numbers[0];
numbers.push(6);
numbers.splice(2, 1);
var listLength = numbers.length;
console.log(listLength);
//list in string
var color = ["Red", "Blue", "Pink"];
var index = color.indexOf("pink");
console.log(index);
color.forEach(function (colors) {
    console.log(colors);
});
