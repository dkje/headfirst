import Mocha from "./Mocha";

describe("Mocha 토핑 테스트", () => {
	const beverage = {
		cost() {
			return 1;
		},
		getDescription() {
			return "음료";
		},
	};
	const mochaBeverage = new Mocha(beverage);
	it("cost 메소드는 음료 가격에 0.2를 더한 값을 반환한다", () => {
    expect(mochaBeverage.cost()).toBe(1.2);
  });

  it(`getDescription은 음료 명에 ', 모카'를 붙여 반환한다`, ()=>{
    expect(mochaBeverage.getDescription()).toBe("음료, 모카")
  })
});
