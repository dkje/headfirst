import CondimentDecorator from "../CondimentDecorator/CondimentDecorator";
import { Beverage } from "../Beverage/Beverage.type";

class Whip extends CondimentDecorator {
	#beverage: Beverage;
	constructor(beverage: Beverage) {
		super();
		this.#beverage = beverage;
	}

	getDescription(): string {
		return this.#beverage.getDescription() + ", 휘핑";
	}

	cost(): number {
		return this.#beverage.cost() + 0.5;
	}
}

export default Whip;
