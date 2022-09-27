import { RubberDuck } from "./MyDucks";
import { FlyNoWay, MuteQuack, Quack } from "./Behaviors";
import Duck from "./Duck";

const brokenRubberDuck = new RubberDuck({
	flyBehavior: new FlyNoWay(),
	quackBehavior: new MuteQuack(),
});

brokenRubberDuck.performQuack();

const fixDuckSound = (duck: Duck) => {
	duck.quackBehavior = new Quack();
};

fixDuckSound(brokenRubberDuck);

brokenRubberDuck.performQuack();
