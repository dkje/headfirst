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
exports.__esModule = true;
exports.DecoyDuck = exports.RubberDuck = exports.RedheadDuck = exports.MallardDuck = void 0;
var Duck_1 = require("./Duck");
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MallardDuck.prototype.display = function () {
        // 물오리 모양 표시
    };
    return MallardDuck;
}(Duck_1["default"]));
exports.MallardDuck = MallardDuck;
var RedheadDuck = /** @class */ (function (_super) {
    __extends(RedheadDuck, _super);
    function RedheadDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RedheadDuck.prototype.display = function () {
        // 붉은 머리 오리 모양 표시
    };
    return RedheadDuck;
}(Duck_1["default"]));
exports.RedheadDuck = RedheadDuck;
var RubberDuck = /** @class */ (function (_super) {
    __extends(RubberDuck, _super);
    function RubberDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RubberDuck.prototype.display = function () {
        // 고무 오리 모양 표시
    };
    return RubberDuck;
}(Duck_1["default"]));
exports.RubberDuck = RubberDuck;
var DecoyDuck = /** @class */ (function (_super) {
    __extends(DecoyDuck, _super);
    function DecoyDuck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecoyDuck.prototype.display = function () {
        // 가짜 오리 모양 표시
    };
    return DecoyDuck;
}(Duck_1["default"]));
exports.DecoyDuck = DecoyDuck;
