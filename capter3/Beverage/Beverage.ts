import { BEVERAGE_DEFAULT_DESCRIPTION } from "./Beverage.meta";
import type { Beverage as BeverageIF } from "./Beverage.type";

abstract class Beverage implements BeverageIF {
	description = BEVERAGE_DEFAULT_DESCRIPTION;

	getDescription() {
		return this.description;
	}

	abstract cost(): number;
}

export default Beverage;
