import CondimentDecorator from "../CondimentDecorator/CondimentDecorator";
import { Beverage } from "../Beverage/Beverage.type";

class Mocha extends CondimentDecorator {
	#beverage: Beverage;
	constructor(beverage: Beverage) {
		super();
		this.#beverage = beverage;
	}

	getDescription(): string {
		return this.#beverage.getDescription() + ", 모카";
	}

	cost(): number {
		return this.#beverage.cost() + 0.2;
	}
}

export default Mocha;
