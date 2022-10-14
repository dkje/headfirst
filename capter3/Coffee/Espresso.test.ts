import Espresso from "./Espresso";
describe("Espresso의 테스트", () => {
	it("cost의 기본 가격은 1.99이다", () => {
		const espresso = new Espresso();
		expect(espresso.cost()).toBe(1.99);
	});
});
