import { BEVERAGE_DEFAULT_DESCRIPTION } from "./Beverage.meta";
import Beverage from "./Beverage";

class DefaultBeverage extends Beverage {
	cost(): number {
		throw Error();
	}
}

describe("Beverage 테스트", () => {
	test("getDescription은 BEVERAGE_DEFAULT_DESCRIPTION을 반환한다", () => {
		const beverage = new DefaultBeverage();
		expect(beverage.getDescription()).toBe(BEVERAGE_DEFAULT_DESCRIPTION);
	});
});
