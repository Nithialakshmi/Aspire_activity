var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    Employee.prototype.displayDetails = function () {
        console.log("Name: ".concat(this.name));
        console.log("Age: ".concat(this.age));
        console.log("Salary: $".concat(this.salary));
    };
    return Employee;
}());
var employee1 = new Employee("Lakshmanan", 21, 60000);
employee1.displayDetails();
//rest operator
function getAverage() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var avg = args.reduce(function (a, b) {
        return a + b;
    }, 0) / args.length;
    return avg;
}
console.log("Average of the given numbers is : " +
    getAverage(100, 201, 302, 403, 504));
console.log("Average of the given numbers is : " +
    getAverage(1.15, 3.25, 5.35, 7.45, 9.65));
//spread operator
var colour = ["Employee", "Team Lead", "Manager"];
var newArray = __spreadArray([], colour, true);
console.log(newArray);
