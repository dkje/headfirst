"use strict";
exports.__esModule = true;
var Duck = /** @class */ (function () {
    function Duck(arg) {
        this._quackBehavior = arg.quackBehavior;
        this._flyBehavior = arg.flyBehavior;
    }
    Object.defineProperty(Duck.prototype, "flyBehavior", {
        get: function () {
            return this._flyBehavior;
        },
        set: function (newFly) {
            this._flyBehavior = newFly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Duck.prototype, "quackBehavior", {
        get: function () {
            return this.quackBehavior;
        },
        set: function (newQuack) {
            this._quackBehavior = newQuack;
        },
        enumerable: false,
        configurable: true
    });
    Duck.prototype.performQuack = function () {
        this._quackBehavior();
    };
    Duck.prototype.performFly = function () {
        this._flyBehavior();
    };
    Duck.prototype.swim = function () {
        console.log("어푸 어푸");
    };
    Duck.prototype.display = function () {
        console.log("펄럭 펄럭");
    };
    return Duck;
}());
exports["default"] = Duck;
