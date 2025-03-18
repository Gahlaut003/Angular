"use strict";
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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    /**
     *
     */
    function Employee(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    Employee.prototype.getNamewithAddress = function () {
        return "".concat(this.name, " ").concat(this.address);
    };
    Employee.getEmployeeCount = function () {
        console.log(50);
        return 50;
    };
    return Employee;
}());
_Employee_id = new WeakMap();
Employee.getEmployeeCount();
var jhon = new Employee(1, 'AKG', 'LKO');
// jhon.id=1;
// jhon.name='jhon';
// jhon.address='lko';
console.log(jhon);
var address = jhon.getNamewithAddress();
console.log(address);
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    /**
     *
     */
    function Manager(id, name, address) {
        return _super.call(this, id, name, address) || this;
    }
    return Manager;
}(Employee));
