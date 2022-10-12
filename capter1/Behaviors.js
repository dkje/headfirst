"use strict";
exports.__esModule = true;
exports.MuteQuack = exports.Squeak = exports.Quack = exports.FlyNoWay = exports.FlyWithWings = void 0;
var FlyWithWings = /** @class */ (function () {
    function FlyWithWings() {
    }
    FlyWithWings.prototype.fly = function () {
        console.log("퍼덕~ 퍼덕~");
    };
    return FlyWithWings;
}());
exports.FlyWithWings = FlyWithWings;
var FlyNoWay = /** @class */ (function () {
    function FlyNoWay() {
    }
    FlyNoWay.prototype.fly = function () {
        console.log("아무것도 하지 않음...");
    };
    return FlyNoWay;
}());
exports.FlyNoWay = FlyNoWay;
var Quack = /** @class */ (function () {
    function Quack() {
    }
    Quack.prototype.quack = function () {
        console.log("꽥.. 꽥...");
    };
    return Quack;
}());
exports.Quack = Quack;
var Squeak = /** @class */ (function () {
    function Squeak() {
    }
    Squeak.prototype.quack = function () {
        console.log("삑 삑...");
    };
    return Squeak;
}());
exports.Squeak = Squeak;
var MuteQuack = /** @class */ (function () {
    function MuteQuack() {
    }
    MuteQuack.prototype.quack = function () {
        console.log(".....");
    };
    return MuteQuack;
}());
exports.MuteQuack = MuteQuack;
