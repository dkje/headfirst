"use strict";
exports.__esModule = true;
var MyDucks_1 = require("./MyDucks");
var Behaviors_1 = require("./Behaviors");
var brokenRubberDuck = new MyDucks_1.RubberDuck({
    flyBehavior: new Behaviors_1.FlyNoWay(),
    quackBehavior: new Behaviors_1.MuteQuack()
});
brokenRubberDuck.performQuack();
var fixDuckSound = function (duck) {
    duck.quackBehavior = new Behaviors_1.Quack();
};
fixDuckSound(brokenRubberDuck);
brokenRubberDuck.performQuack();
