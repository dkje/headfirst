import { Beverage } from "./Beverage/Beverage.type";
import Espresso from "./Coffee/Espresso";
import HouseBlend from "./Coffee/HousBlend";
import Mocha from "./Topping/Mocha";
import Whip from "./Topping/Whip";

(function main() {
	const beverage = new Espresso();

	console.log(`${beverage.getDescription()} $${beverage.cost()}`);

	let beverage2:Beverage = new HouseBlend();
	beverage2 = new Mocha(beverage2);
	beverage2 = new Mocha(beverage2);
	beverage2 = new Whip(beverage2);

	console.log(`${beverage2.getDescription()} $${beverage2.cost()}`);

	let beverage3:Beverage = new Espresso();
	beverage3 = new Mocha(beverage3);
	beverage3 = new Whip(beverage3);
	beverage3 = new Whip(beverage3);

	console.log(`${beverage3.getDescription()} $${beverage3.cost()}`);
})();
