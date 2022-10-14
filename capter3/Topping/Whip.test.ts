import Whip from "./Whip";

describe("Whip 토핑 테스트", () => {
	const beverage = {
		cost() {
			return 1;
		},
		getDescription() {
			return "음료";
		},
	};
	const customBeverage = new Whip(beverage);
	it("cost 메소드는 음료 가격에 0.5를 더한 값을 반환한다", () => {
		expect(customBeverage.cost()).toBe(1.5);
	});

	it(`getDescription은 음료 명에 ', 모카'를 붙여 반환한다`, () => {
		expect(customBeverage.getDescription()).toBe("음료, 휘핑");
	});
});
