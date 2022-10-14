import HouseBlend from './HousBlend';
describe("HouseBlend의 테스트", () => {
	it("cost의 기본 가격은 0.89이다", () => {
		const houseBlend = new HouseBlend();
		expect(houseBlend.cost()).toBe(0.89);
	});
});
